export function extractTime(time) {
  //extract time without the seconds
  return (
    new Date(time).toLocaleTimeString().split(":")[0] +
    ":" +
    new Date(time).toLocaleTimeString().split(":")[1] +
    " " +
    new Date(time).toLocaleTimeString().split(":")[2].split(" ")[1]
  );
  return time;
}

//2024-07-22T15:22:06.900Z

//new Date("2024-07-22T15:22:06.900Z").toLocaleTimeString()
