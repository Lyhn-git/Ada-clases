# Practica maquetado <br>

![Diseño a seguir](https://cdn.dribbble.com/users/522558/screenshots/5059613/dribble_static__1_.png)

## Instrucciones <br>

  - Primero, **una** de las integrantes del grupo debe **forkear** este repositorio y **agrega como colaboradoras** al resto del equipo
  - Todas deben **clonar** este repositorio
  - Una vez clonado, se debe **crear una branch nueva** con un nombre indicativo de lo que se va a hacer (*no se trabaja en master*)
  - Repartirse el trabajo y trabajar cada una en su propia branch con `git checkout -b mi-branch`
  - A la hora de pushear, pushear la nueva branch creada (`git push origin mi-branch`)
  - Solo **una** de las integrantes del equipo va a ser la encargada de mergear. Para eso:
    * Pararse en master con `git checkout master`
    * Traer todas las branchs con `git fetch --all`
    * Listar todas las branchs con `git branch -a` (el `-a` es de all, nos lista todas las branch, locales y remotas, es decir, la nuestra y las de las demás)
    * Ir mergeando una a una con `git merge origin/nombre-branch`. Si hay conflictos, solucionarlos, commitear y seguir mergeando las demás branchs. **OJO:** el nombre de las branchs que nos traemos tenemos que utilizarlas con origin, porque vienen desde el remote, en cambio la nuestra que está en nuestra computadora no
    * Finalmente pushear a master
 - Para borrar las branchs locales `git branch -d nombre-branch`
 - Para borrar las branchs remotas `git push origin --delete nombre-branch` (solo una tiene que hacer esto)
<br>

## Recursos <br>

  - [Imágen de comida 1](https://www.freepnglogos.com/uploads/pasta-png/pasta-piada-italian-street-food-home-page-38.png)
  - [Imágen de comida 2](http://www.pngplay.com/wp-content/uploads/2/Top-View-Pizza-Transparent-Background.png)
  - [Imágen de comida 3](http://pngtransparent.com/images/pizza-png-1096x1111_06ce1bde.png)
  - [Imágen de comida 4](https://cdn.shopify.com/s/files/1/1698/9451/products/Moroccan_Chicken_Plate_1024x1024.png?v=1536624613)
  - [Imágen de comida 5](https://images.ctfassets.net/4frik3v39clf/5CvdEQ4ilCa9iRkGROnOwW/dd516110e6d37e91a8e3439d05163207/Smothered_Pork_Chops_with_Home_Fries_and_Green_Beans_-_Week_33.png)
  - [Imágen de comida 6](https://cdn.shopify.com/s/files/1/1698/9451/products/Chicken_Marsala_Plate_1024x1024.png?v=1536623536)
