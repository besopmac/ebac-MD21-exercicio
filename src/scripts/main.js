document.addEventListener('click', e => {
  let handle

  if (e.target.matches('.content__handle')) {
    handle = e.target
  } else {
    handle = e.target.closest('.content__handle')
  }

  if (handle != null) {
    onHandleClick(handle)
  }
})

function onHandleClick(handle) {
  const slider = handle.closest('.content__container').querySelector('.content__slider')
  const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'))

  if (handle.classList.contains('content__handle--left')) {
    slider.style.setProperty('--slider-index', sliderIndex - 1)
  }

  if (handle.classList.contains('content__handle--right')) {
    slider.style.setProperty('--slider-index', sliderIndex + 1)
  }
}