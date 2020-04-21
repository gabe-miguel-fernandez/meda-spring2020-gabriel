var withNL = `Technology ("science of craft", from Greek τέχνη, techne, "art, skill, cunning of hand"; and -λογία, -logia) is the sum of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation. Technology can be the knowledge of techniques, processes, and the like, or it can be embedded in machines to allow for operation without detailed knowledge of their workings. Systems (e.g. machines) applying technology by taking an input, changing it according to the system's use, and then producing an outcome are referred to as technology systems or technological systems.

The simplest form of technology is the development and use of basic tools. The prehistoric discovery of how to control fire and the later Neolithic Revolution increased the available sources of food, and the invention of the wheel helped humans to travel in and control their environment. Developments in historic times, including the printing press, the telephone, and the Internet, have lessened physical barriers to communication and allowed humans to interact freely on a global scale.

Technology has many effects. It has helped develop more advanced economies (including today's global economy) and has allowed the rise of a leisure class. Many technological processes produce unwanted by-products known as pollution and deplete natural resources to the detriment of Earth's environment. Innovations have always influenced the values of a society and raised new questions in the ethics of technology. Examples include the rise of the notion of efficiency in terms of human productivity, and the challenges of bioethics.

Philosophical debates have arisen over the use of technology, with disagreements over whether technology improves the human condition or worsens it. Neo-Luddism, anarcho-primitivism, and similar reactionary movements criticize the pervasiveness of technology, arguing that it harms the environment and alienates people; proponents of ideologies such as transhumanism and techno-progressivism view continued technological progress as beneficial to society and the human condition.`;

var withoutNLs = `Technology ("science of craft", from Greek τέχνη, techne, "art, skill, cunning of hand"; and -λογία, -logia) is the sum of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation. Technology can be the knowledge of techniques, processes, and the like, or it can be embedded in machines to allow for operation without detailed knowledge of their workings. Systems (e.g. machines) applying technology by taking an input, changing it according to the system's use, and then producing an outcome are referred to as technology systems or technological systems. The simplest form of technology is the development and use of basic tools. The prehistoric discovery of how to control fire and the later Neolithic Revolution increased the available sources of food, and the invention of the wheel helped humans to travel in and control their environment. Developments in historic times, including the printing press, the telephone, and the Internet, have lessened physical barriers to communication and allowed humans to interact freely on a global scale. Technology has many effects. It has helped develop more advanced economies (including today's global economy) and has allowed the rise of a leisure class. Many technological processes produce unwanted by-products known as pollution and deplete natural resources to the detriment of Earth's environment. Innovations have always influenced the values of a society and raised new questions in the ethics of technology. Examples include the rise of the notion of efficiency in terms of human productivity, and the challenges of bioethics. Philosophical debates have arisen over the use of technology, with disagreements over whether technology improves the human condition or worsens it. Neo-Luddism, anarcho-primitivism, and similar reactionary movements criticize the pervasiveness of technology, arguing that it harms the environment and alienates people; proponents of ideologies such as transhumanism and techno-progressivism view continued technological progress as beneficial to society and the human condition.`;

var withArray = withNL.split(" ");
var withoutArray = withoutNLs.split(" ");


console.log(withArray.length);
console.log(withoutArray.length);
for (var i = 0; i < withArray.length; i++) {

    if (withArray[i] === withoutArray[i]) {
        continue;
    } else {
        console.log("With space: " + i + withArray[i]);
        console.log("Without spaces: "+ i + withoutArray[i]);
        break;
    }


}