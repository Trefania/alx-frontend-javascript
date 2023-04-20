import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
  const room_size = [19, 20, 34];
  const rooms = room_size.map(size => new ClassRoom(size));
  return rooms;
}
