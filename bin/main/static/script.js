/**
 * 
 */
'use strict';

//const modal001Button = document.querySelector('[data-modal="modal001"]');
//console.log(modal001Button);
//const modalCloseBtns = document.querySelectorAll('[data-modal="close"]');
//console.log(modalCloseBtns);

let youkaiCardIdName = null;

const youkaiCard = document.querySelectorAll('.youkaiCard');

const modalCloseBtns = document.querySelectorAll('[data-modal="close"]');
console.log(modalCloseBtns);

/* モーダルを表示 */
//modal001Button.addEventListener('click', function(e) {
//  e.preventDefault();
//  document.querySelector('[data-modal="bg"]').classList.add('is-active');
//  document.querySelector('[data-modal="inner"]').classList.add('is-active');
//  document.querySelector('[data-modal="box-modal001"]').classList.add('is-active');
//});
//youkaiCard.addEventListener('click', function(e) {
//  e.preventDefault();
//  youkaiCardIdName = youkaiCard.id;
//  console.log(youkaiCardIdName);
//  document.querySelector('[data-modal="bg"]').classList.add('is-active');
//  document.querySelector('[data-modal="inner"]').classList.add('is-active');
//  console.log(document.querySelector('#'+youkaiCardIdName+'modal').classList);
//  document.querySelector('#'+youkaiCardIdName+'modal').classList.add('is-active');
//});


youkaiCard.forEach(function (e) {
	e.addEventListener('click', function(f) {
	  f.preventDefault();
	  youkaiCardIdName = e.id;
	  console.log("1_"+youkaiCardIdName);
	  document.querySelector('[data-modal="bg"]').classList.add('is-active');
	  document.querySelector('[data-modal="inner"]').classList.add('is-active');
	  console.log(document.querySelector('#'+youkaiCardIdName+'modal').classList);
	  document.querySelector('#'+youkaiCardIdName+'modal').classList.add('is-active');
	});
});


///* モーダルを消す動作 */
//modalCloseBtns.forEach(modalCloseBtn => {
//  modalCloseBtn.addEventListener('click', function() {
//    document.querySelector('[data-modal="bg"]').classList.remove('is-active');
//    document.querySelector('[data-modal="inner"]').classList.remove('is-active');
//    document.querySelector('[data-modal="box-modal001"]').classList.remove('is-active');
//  });
//});

/* モーダルを消す動作 */
//modalCloseBtns.forEach(modalCloseBtn => {
//  modalCloseBtn.addEventListener('click', function() {
//	youkaiCardIdName = youkaiCard.id;
//    document.querySelector('[data-modal="bg"]').classList.remove('is-active');
//    document.querySelector('[data-modal="inner"]').classList.remove('is-active');
//    document.querySelector('#'+youkaiCardIdName+'modal').classList.remove('is-active');
//  });
//});

modalCloseBtns.forEach(modalCloseBtn => {
  modalCloseBtn.addEventListener('click', function() {
//	youkaiCardIdName = youkaiCard.id;
console.log("2_"+youkaiCardIdName);
    document.querySelector('[data-modal="bg"]').classList.remove('is-active');
    document.querySelector('[data-modal="inner"]').classList.remove('is-active');
    document.querySelector('#'+youkaiCardIdName+'modal').classList.remove('is-active');
console.log( document.querySelector('#'+youkaiCardIdName+'modal').classList);
  });
});