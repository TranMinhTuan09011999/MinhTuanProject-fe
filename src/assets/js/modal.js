function attentionTrigger() {
	$(".attentionTrigger").on("click",function(){
		var href = $(this).attr("href");

		$(href).fadeIn();

		setTimeout(function(){
			$(href).fadeOut();
		},2700);

		return false;
	});

	$(".modalTrigger--close").on("click",function(){
		$(this).parents(".m-modal").fadeOut();
    clearTabIndex();
		return false;
	});
}
attentionTrigger();

function modalInteraction() {
	$(".modalTrigger").on("click",function(){
		var href = $(this).attr("href");

		$(href).fadeIn();

    preventTabIndexOutside();
		return false;
	});

	$(".modalTrigger--close").on("click",function(){
		$(this).parents(".m-modal").fadeOut();
    clearTabIndex();
		return false;
	});
}
modalInteraction();

function pushInteraction() {
	$(".pushPrigger").on("click",function(){
		var href = $(this).attr("href");

		$(href).addClass("pushAttention--active");

		$(function(){
			setTimeout(function(){
				$(href).removeClass("pushAttention--active");
			},5125);
		});
		return false;
	});
}
pushInteraction();

let nonModalNodes = [];
let tabIndexFlag = false;

function preventTabIndexOutside() {
  if (this.tabIndexFlag) {
    return;
  }
  const modalNodes = Array.from( document.querySelectorAll('.m-modal *') );
  this.nonModalNodes = document.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]');
  for (const node of this.nonModalNodes) {
    if (!modalNodes.includes(node)) {
      node._prevTabindex = node.getAttribute('tabindex');
      node.setAttribute('tabindex', -1);
      node.style.outline = 'none';
    }
  }
  this.tabIndexFlag = true;
}

function clearTabIndex() {
  if (!this.tabIndexFlag) {
    return;
  }
  if (this.nonModalNodes) {
    for (const node of this.nonModalNodes) {
      if (node._prevTabindex && node._prevTabindex !== '-1') {
        node.setAttribute('tabindex', node._prevTabindex);
        node._prevTabindex = null;
      } else {
        node.removeAttribute('tabindex');
      }
      node.style.outline = null;
    }
  }
  this.tabIndexFlag = false;
}
