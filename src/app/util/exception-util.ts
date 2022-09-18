import { throwError } from 'rxjs';

export class ExceptionUtil {

    public static handleErrorText = (error: { error: { message: string; }; status: any; message: any; }) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }

    public static handleError = (error: any) => {
        return throwError(error);
    }
}
