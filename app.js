const carrito = document.querySelector("#carritoCompras");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const buttonAgregar = document.querySelectorAll(".card button");

const carritoObjeto = {};

const AgregarAlCarrito = (e) => {
   console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

    if (carritoObjeto.hasOwnProperty(producto.id)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    }

    carritoObjeto[producto.titulo] = producto;

    // console.log('Carrito objeto: ', carritoObjeto)
   
    pintarCarrito();
   
};


const pintarCarrito = () =>{
    carrito.textContent = ""



    Object.values(carritoObjeto).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true);

        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;

        fragment.appendChild(clone)
    });
    
    carrito.appendChild(fragment);

};

buttonAgregar.forEach((btn) => btn.addEventListener("click", AgregarAlCarrito));
