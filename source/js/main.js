const inviteBtn = document.querySelector('.promo__invite-link');
const rulesBtn = document.querySelector('.page-footer__rules-link');
const popup = document.querySelector('.popup');
const menuCloseBtn = document.querySelector('.popup__close-menu-btn');

const onInviteBtnClick = (evt) => {
	if (evt.target && evt.target.closest('.promo__invite-link')) {
		evt.preventDefault();
		console.log('Button clicked');
	}
};

const onRulesBtnClick = (evt) => {
	if (evt.target && evt.target.closest('.page-footer__rules-link')) {
		evt.preventDefault();
		popup.classList.add('active');
		document.body.classList.add('page-body--no-scroll');

		menuCloseBtn.addEventListener('click', (evt) => {
			if (evt.target && evt.target.closest('.popup__close-menu-btn')) {
				popup.classList.remove('active');
				document.body.classList.remove('page-body--no-scroll');
			}
		})
	}
};

inviteBtn.addEventListener('click', onInviteBtnClick);
rulesBtn.addEventListener('click', onRulesBtnClick);
