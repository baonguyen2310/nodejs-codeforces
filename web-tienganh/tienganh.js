import { readFile, writeFile } from "fs";

// Đường dẫn đến file văn bản
const filePath = "term.txt";

// Đọc file với mã hóa utf-8 để nhận được nội dung văn bản
readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Lỗi khi đọc file:", err);
    return;
  }

  const dataArray = data.split("\n");
  for (let i = 0; i < dataArray.length; i++) {
    let indexTarget;

    for (let j = 0; j < dataArray[i].length; j++) {
      if (dataArray[i][j] == "*" && dataArray[i][j + 1] == " ") {
        indexTarget = j + 2;
        break;
      }
    }

    dataArray[i] = dataArray[i].slice(indexTarget);

    dataArray[i] = "\"" + dataArray[i] + "\","

  }
  console.log(dataArray[1]);

  const dataToWrite = dataArray.join("\n")

  // Đường dẫn đến file mới bạn muốn tạo
  const newFilePath = "termmoi.txt";

  // Ghi dữ liệu vào file mới
  writeFile(newFilePath, dataToWrite, "utf-8", (err) => {
    if (err) {
      console.error("Lỗi khi ghi vào file mới:", err);
      return;
    }

    console.log("Dữ liệu đã được ghi vào file mới thành công.");
  });
});
