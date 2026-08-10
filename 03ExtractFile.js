function solve(data) {
    let text = data.substring(data.lastIndexOf("\\") + 1);
    let fileName = text.substring(0, text.lastIndexOf("."));
    let fileExtension = text.substring(text.lastIndexOf(".") + 1);


    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${fileExtension}`)

}
solve('C:\\Internal\\training-internal\\Template.pptx')
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')