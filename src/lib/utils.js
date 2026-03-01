export const getRandomColor = () => {
  const colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#FFEB3B', '#FFC107', '#FF5722', '#795548'];
  const i = Math.floor(Math.random() * colors.length);
  return colors[i];
}


export const getInitials = (name) => {
  let initials = name.split(' ');

  if (initials.length > 1) {
    initials = initials.shift().charAt(0) + initials.pop().charAt(0);
  } else {
    initials = name.substring(0, 2);
  }

  return initials.toUpperCase();
};
