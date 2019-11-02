class Modal {
  constructor({
    classes = {
      cover: 'cover',
      wrapper: 'wrapper',
      dimmed: 'dimmed',
      modal: 'modal',
      confirm: null,
      cancel: null,
      close: 'close'
    },
    contents = {
      body:
        '샘플 마크업입니다. 모달창의 내용입니다. 브라우저 화면의 정중앙에 떠야 합니다.',
      confirmBtn: '확인',
      cancelBtn: '취소'
    },
    lifeCycleMethod = {
      afterConfirm: null
    }
  }) {
    this.classes = classes;
    this.content = contents;
    this.targetNodeToDelet = null;
    this.lifeCycleMethod = lifeCycleMethod;
  }

  getModal() {
    const {
      cover,
      wrapper,
      dimmed,
      modal,
      confirm,
      cancel,
      close
    } = this.classes;
    const { body, confirmBtn, cancelBtn } = this.content;
    this.cover = document.createElement('div');
    this.cover.classList.add(cover);
    this.cover.style.display = 'none';
    return `
    <div class="${cover}">
      <div class="${dimmed}"></div>
      <div class="${wrapper}">
        <div class="${modal}">
        ${close ? `<button class=${close}>X</button>` : ''}
          <p>${body}</p>
          <footer>
            ${
              confirm
                ? `<button class="${confirm}" >${confirmBtn}</button>`
                : ''
            }
            ${cancel ? `<button class="${cancel}" >${cancelBtn}</button>` : ''}
          </footer>
          
        </div>
      </div>
    </div>  
  `;
  }

  build() {
    const modal = this.getModal();
    document.body.insertAdjacentHTML('afterbegin', modal);
    this.cover = document.querySelector(`.${this.classes.cover}`);

    this.attachEvent();
  }

  isOpen() {
    return !!this.cover.classList.contains('visible');
  }

  open() {
    this.scrollPosition = window.pageYOffset;
    document.body.style.top = `${-this.scrollPosition}px`;
    this.cover.classList.add('visible');
    document.body.classList.add('visible');
  }

  close() {
    window.scrollTo(0, this.scrollPosition);
    document.body.style.top = null;
    this.cover.classList.remove('visible');
    document.body.classList.remove('visible');
  }

  confirm() {
    const { afterConfirm } = this.lifeCycleMethod;
    this.close();
    if (typeof afterConfirm === 'function') {
      afterConfirm();
    }
  }

  attachEvent() {
    const { confirm, cancel, close } = this.classes;

    this.cover.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
    });

    if (confirm) {
      const confirmBtn = this.cover.querySelector(`.${confirm}`);
      confirmBtn.addEventListener('click', () => {
        this.confirm();
      });
    }

    if (cancel) {
      const cancelBtn = this.cover.querySelector(`.${cancel}`);
      cancelBtn.addEventListener('click', () => {
        this.close();
      });
    }
    if (close) {
      const closeBtn = this.cover.querySelector(`.${close}`);
      closeBtn.addEventListener('click', () => {
        this.close();
      });
    }
  }
}

const resultModal = new Modal({
  classes: {
    cover: 'cover',
    wrapper: 'wrapper',
    dimmed: 'dimmed',
    modal: 'modal',
    confirm: null,
    cancel: null,
    close: 'close'
  },
  contents: {
    body: '요소가 삭제되었습니다.'
  }
});
resultModal.build();

let targetNodeToDelet = null;

function deleteTargetNode() {
  if (targetNodeToDelet === null) {
    return;
  }
  targetNodeToDelet.remove();
  resultModal.open();
}

const confirmModal = new Modal({
  classes: {
    cover: 'cover',
    wrapper: 'wrapper',
    dimmed: 'dimmed',
    modal: 'modal',
    confirm: 'confirm',
    cancel: 'cancel',
    close: 'close'
  },
  contents: {
    body: '해당 요소를 삭제 하시겠습니까?',
    confirmBtn: '확인',
    cancelBtn: '취소'
  },
  lifeCycleMethod: {
    afterConfirm: deleteTargetNode
  }
});
confirmModal.build();

const btnDeletes = document.querySelectorAll('.btn_delete');
Array.from(btnDeletes).forEach(btn => {
  btn.addEventListener('click', ({ target }) => {
    targetNodeToDelet = target.closest('article');
    confirmModal.open();
  });
});

document.body.addEventListener('click', ({ target }) => {
  console.log('body child element clicked');
  console.dir(target);
});
