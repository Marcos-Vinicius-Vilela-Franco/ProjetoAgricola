// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [{ id:1, name: 'Imagem 1', link:"/imgs/img1.JPG",  label:"Agricultura de precisão"},
    { id:2, name: 'Imagem 2', link:"/imgs/img2.jpeg", label:"Produtividade"},
    { id:3, name: 'Imagem 3', link:"/imgs/img3.jpg",label:"Tecnologia" }
    ]
    );
}
