export default function getListStudentIds() {
	let list = [];
	if (!Array.isArray(list)) {
		return list;
	}
	return list.map((student) => student.id);
}
