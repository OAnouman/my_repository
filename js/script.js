/**
 * Created by MARTIAL ANOUMAN on 1/26/2017.
 */

var magicNumber = Math.round(Math.random() * 100);
var userInputNumber = 0;
var exit = false;


console.log('Bienvenue dans le jeu de  "Mini Deviette". Vous devez trouver le nombre mystère compris entre 1 - 100.\nBonne chance !');
while(!exit)
{
    userInputNumber = Number(prompt('Entrez un nombre'));
    // while(userInputNumber === null)
    // {
    //     console.log('Vous devez saisir un nombre !');
    //     userInputNumber = prompt('Entrez un nombre');
    // }

    if(magicNumber > userInputNumber)
        console.log(userInputNumber + ' est trop petit !');
    else
    {
        if(magicNumber < userInputNumber)
            console.log(userInputNumber + ' est trop grand !');
        else
        {
            console.log('Bravo ! Vous avez trouvez le nombre mystère ' + magicNumber);
            if( confirm('Voulez-vous faire une nouvelle partie ?') )
            {
                userInputNumber = 0;
                exit = false;
                magicNumber = Math.round(Math.random() * 100);
                console.log('\n\nQuel est le nouveau nombre mystère ? ');
            }
            else
            {
                exit = true;
            }

        }

    }


}
