export const showEditImage = (data) => {
  const editImage = document.getElementById("edit-image") as HTMLImageElement;
  editImage.src = data;
};
