# TensorFlow with Javascript

使用JS對後續平台資料進行分析，目前有線性回歸、多類別判斷

## Getting Started

這個專案目前尚無模組化設計，尚未支援資料預處理功能，先將整理好的資料放到 `data` 資料夾即可

### Data - load-csv
有以下參數需要設定：
  - dataColumns: 接收陣列選定給定之特徵欄位 Ex => ['aa', 'bb']
  - labelColumns: 接收陣列(只能選定一欄)選定給定之標籤欄位 Ex => ['cc']
  - shuffle: 是否需要隨機抽取資料
  - splitTest: 測試資料集大小
  - converters: 接收函式轉換欄位內容 Ex => true,false 轉換成 0,1 

### Learning 

學習參數包含
 - learningRate: `學習速率` 模型會自動調整
 - iterations: `迭代次數` 要跑幾次所有資料集，可以理解為 Epoch
 - batchSize: `批次大小` 需要幾次跑完一次所有資料集，這個需要透過輸出的 png 進行修改

### Predict

依據特徵欄位之順序給定陣列即可

### Prerequisites

若使用 Windows 平台，需要預先安裝 Python2.x 版本編譯 TensorFlow
推薦使用`Windows Ubuntu 子系統(一樣要先安裝 Python)`

```bash
# 確認 Python 版本
$ which python # /usr/bin/python
$ python --version # Python 2.7.X
$ pwd # 確認路徑沒有空格

$ git clone https://github.com/PSheon/tensorflow-kits.git
$ cd tensorflow-kits
```

### 安裝專案
```bash
$ yarn

# 將個資料夾 index.js 參數設定好後執行即可看結果
# 例如我想跑多類別預測
$ node multinominal-regression/index.js
```

## TODO :
--------------------------
- 增加CNN、神經網路、深度網路模型
- 將 激活函數改成 ReLu 函數
- 