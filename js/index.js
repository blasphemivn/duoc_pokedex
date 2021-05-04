
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
  const pokemones = []; //definir un arreglo en js


  // document. para hacer referencia al docu html en sí 
  // .querySelector para buscar en el code el id, en este caso'pokemon-form' 
  /* addEventListener se usa con 2 parámetros, el primero es el evento que estoy 
  capturando (submit en este caso), "(e)=>{e.preventDefault}
  previene que el formulario recargue la pag */
  document.querySelector("#pokemon-form").addEventListener('submit', (e)=>{
    e.preventDefault();
    let nombre = document.querySelector("#nombre-txt").value; //asignarle un valor a la variable y retornar el valor 
    let descripcion = tinymce.get("descripcion-txt").getContent(); // para un componente tinymce el valor se muestra así
    let legendario = document.querySelector("#legendario-si").checked;
    let tipo = document.querySelector("#tipo-select").value;
    //console.log("holamundo", nombre, descripcion, legendario, tipo); //mensaje consola

    let pokemon = {
    };
    pokemon.nombre= nombre; //al crear el objeto, se le asignan los valores con "objeto.variable = variable"
    pokemon.descripcion = descripcion;
    pokemon.legendario = legendario;
    pokemon.tipo = tipo;
    pokemones.push(pokemon);
    console.log(pokemones);
  });


