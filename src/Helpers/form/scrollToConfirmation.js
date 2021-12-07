export default (props, wrapperRef) => {
  // handler on change page
  const { onChangePage, jumpToConfirmation } = props;
  if (onChangePage) {
    onChangePage();
  }

  if (jumpToConfirmation) {
    const rect = wrapperRef ? wrapperRef.current.getBoundingClientRect() : false;
    if (rect && window) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: scrollTop + rect.top - 100,
      });
    }
  }
};
