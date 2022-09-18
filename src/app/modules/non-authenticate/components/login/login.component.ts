import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RouterConstant} from "../../../../constant/router-constant";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {validatorEmailPattern} from "../../../../util/validators/validators-email";
import {CustomHandleValidate} from "../../../../util/custom-handle-validate";
import {PortalTypeHelper} from "../../../../util/portal-type-helper";
import {NonAuthenticateService} from "../../services/non-authenticate.service";
import {CommonUtil} from "../../../../util/common-util";
import {SessionService} from "../../../../services/session.service";
import {SessionAttribute} from "../../../../constant/session-attribute";
import {ScreenService} from "../../../../services/screen.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public customValidate!: CustomHandleValidate;

  public errorMessage!: string;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private nonAuthenticateService: NonAuthenticateService,
              private sessionService: SessionService,
              private screenService: ScreenService) { }

  ngOnInit(): void {
    this.loginFormGroup();
  }

  loginFormGroup = () => {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required
      ]],
      password: ['', Validators.required],
    }, {
      validator: [
        validatorEmailPattern('email')
      ]
    });
    this.customValidate = new CustomHandleValidate(this.loginForm);
  }

  getValidates = (key: string) => {
    return this.customValidate.getValidates(key);
  }

  hasError = (key: string, errorCode: string) => {
    return this.customValidate.hasError(key, errorCode);
  }

  onSubmit = () => {
    this.errorMessage = '';
    if (!this.customValidate.isValidForm()) {
      return;
    }
    const dataPayload = this.loginForm.value;
    dataPayload.portalType = PortalTypeHelper.getPortalType(this.activatedRoute);
    console.log(dataPayload);
    // https://stackoverflow.com/questions/55472124/subscribe-is-deprecated-use-an-observer-instead-of-an-error-callback
    this.nonAuthenticateService.login(dataPayload).subscribe({
      next: (data) => this.nextSubmit(data),
      error: (error) => this.errorSubmit(error),
      complete: () => console.info('complete')
    })
  }

  nextSubmit = async (data: any) => {
    await this.sessionService.setAttributeAsync(SessionAttribute.USER_DETAILS, data.userDetails);
    console.log(data);
    if (PortalTypeHelper.isMyLifeMyRulesPortal()) {
      this.screenService.goToHomePage();
    }
  }

  errorSubmit = (error: any) => {
    this.errorMessage = CommonUtil.getMessageError(error);
    console.log(this.errorMessage);
  }

  userRegister = () => {
    this.router.navigate([RouterConstant.MY_LIFE_MY_RULES.path, RouterConstant.NON_AUTHENTICATE_REGISTER.path]).then();
  }

}
