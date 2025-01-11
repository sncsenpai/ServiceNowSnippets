if (typeof spModal != 'undefined') {
  spModal.alert("xxxx");
} else {
  // Fallback for desktop UI
  var gm = new GlideModal();
  gm.setTitle("Popup Title");
  gm.renderWithContent("xxxx");
}
