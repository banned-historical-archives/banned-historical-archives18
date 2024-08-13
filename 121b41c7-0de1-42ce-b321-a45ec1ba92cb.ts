export default {
  entity: {
    id: '121b41c7-0de1-42ce-b321-a45ec1ba92cb',
    name: '关于陈红兵问题的调查报告',
    internal: false,
    type: 'img',
    official: false,
    author: '',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/6.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/7.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/8.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/9.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/10.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/11.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/12.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/13.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/14.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives18/main/121b41c7-0de1-42ce-b321-a45ec1ba92cb/15.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '关于陈红兵问题的调查报告',
        authors: [],
        page_start: 1,
        page_end: 15,
        dates: [
          {
            year: 1977,
            month: 7,
            day: 13,
          },
        ],
      },
    ],
    ocr: {
      use_onnx: true,
      det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
      rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
    },
  },
  parser_id: 'automation',
  path: '121b41c7-0de1-42ce-b321-a45ec1ba92cb',
  resource_type: 'book',
  version: 2,
};