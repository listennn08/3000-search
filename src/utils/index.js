export const getColor = (admissible, remaining) => {
  if (admissible) {
    admissible = admissible.replace(/.*(?:<br>|^)+\*(.*)<br>/, '$1').replace(/本日可受理量：(\w+)/, '$1');
    if (admissible.includes('本日未營業')) return '#c0c0c0';
    const percent = (remaining/admissible) * 100;
    switch (true) {
      case percent > 80:
        return "#8d8";
      case percent > 50:
        return "#fa0";
      case percent > 30:
        return "#f00";
      default:
        return "#c0c0c0";
    }
  }
};
