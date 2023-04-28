// Define constants for different subjects
const std::string cpp = "C++";
const std::string java = "Java";
const std::string react = "React";

// Define a Teacher object for C++ with 10 years of teaching experience
class Teacher {
public:
int experienceTeachingC;
Teacher(int experienceTeachingC) {
this->experienceTeachingC = experienceTeachingC;
}
std::string getRequirements() {
return "Must have a strong grasp of programming fundamentals and syntax.";
}
std::string getAvailableTeacher() {
return "The available C++ teacher has " + std::to_string(experienceTeachingC) + " years of experience teaching C++.";
}
};
Teacher cTeacher(10);

// For C++ subject, set the teacher and print requirements and available teacher
std::cout << cpp << std::endl;
std::cout << "Teacher: " << std::endl;
std::cout << cTeacher.getRequirements() << std::endl;
std::cout << cTeacher.getAvailableTeacher() << std::endl;

// For Java subject, set the teacher and print requirements and available teacher
std::cout << java << std::endl;
std::cout << "Teacher: " << std::endl;
cTeacher.experienceTeachingC = 5; // Change experience to 5 years for teaching Java
std::cout << cTeacher.getRequirements() << std::endl;
std::cout << cTeacher.getAvailableTeacher() << std::endl;

// For React subject, set the teacher and print requirements and available teacher
std::cout << react << std::endl;
std::cout << "Teacher: " << std::endl;
cTeacher.experienceTeachingC = 8; // Change experience to 8 years for teaching React
std::cout << cTeacher.getRequirements() << std::endl;
std::cout << cTeacher.getAvailableTeacher() << std::endl;