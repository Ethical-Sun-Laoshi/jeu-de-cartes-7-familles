// Définition des variables globales
let players = [];
let currentPlayerIndex = 0;
let currentTheme = "";
let currentDeck = [];

// Fonction pour initialiser le jeu
function init() {
  // Récupération des données du joueur principal depuis le formulaire
  const playerName = document.querySelector("#player-name-input").value;
  const playerAvatar = document.querySelector("#player-avatar-select").value;
  const player = { name: playerName, avatar: playerAvatar };

  // Ajout du joueur principal à la liste des joueurs
  players.push(player);

  // Récupération du thème choisi depuis le formulaire
  currentTheme = document.querySelector("#theme-select").value;

  // Récupération du nombre de joueurs depuis le formulaire
  const numPlayers = document.querySelector("#num-players-select").value;

  // Si le joueur a choisi de jouer contre l'ordinateur, on ajoute un joueur factice
  if (document.querySelector("#vs-computer-radio").checked) {
    players.push({ name: "Ordinateur", avatar: "computer-avatar.png" });
  }

  // Si le joueur a choisi de jouer contre des amis, on affiche le lien d'invitation
  if (document.querySelector("#vs-friends-radio").checked) {
    const invitationLink = generateInvitationLink();
    document.querySelector("#invitation-link-input").value = invitationLink;
  }

  // Affichage de la page de jeu
  showGamePage();
}

// Fonction pour générer un lien d'invitation unique
function generateInvitationLink() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomString = Array.from({ length: 6 }, () =>
  alphabet[Math.floor(Math.random() * alphabet.length)]
).join("");
return `https://monsite.com/7familles?invitation=${randomString}`;
}

// Fonction pour afficher la page de jeu
function showGamePage() {
  // Cacher la page d'accueil et afficher la page de jeu
  document.querySelector("#home-page").classList.add("hidden");
  document.querySelector("#game-page").classList.remove("hidden");

  // Affichage des informations de chaque joueur
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const playerInfo = document.createElement("div");
    playerInfo.classList.add("player-info");
    const avatar = document.createElement("img");
    avatar.src = player.avatar;
    avatar.alt = `${player.name} avatar`;
    playerInfo.appendChild(avatar);
    const name = document.createElement("span");
    name.textContent = player.name;
    playerInfo.appendChild(name);
    document.querySelector("#player-list").appendChild(playerInfo);
  }

  // Initialisation du jeu
  currentDeck = initializeDeck(currentTheme);
  shuffleDeck(currentDeck);
  dealCards(currentDeck, players);
  showCurrentPlayer();
}

// Fonction pour initialiser le jeu de cartes
function initializeDeck(theme) {
  const deck = [];
  // Ajouter les cartes spécifiques au thème
  switch (theme) {
    case "animaux":
    deck.push(
      { family: "chiens", value: "caniche", img: "caniche.png" },
      { family: "chiens", value: "berger allemand", img: "berger-allemand.png" },
      { family: ""chat", value: "siamois", img: "siamois.png" },
      { family: "chat", value: "persan", img: "persan.png" },
      { family: "oiseaux", value: "canari", img: "canari.png" },
      { family: "oiseaux", value: "perruche", img: "perruche.png" },
      { family: "animaux de la ferme", value: "vache", img: "vache.png" },
      { family: "animaux de la ferme", value: "cochon", img: "cochon.png" },
    );
    break;
    case "vêtements":
    deck.push(
      { family: "chaussures", value: "bottes", img: "bottes.png" },
      { family: "chaussures", value: "baskets", img: "baskets.png" },
      { family: "chemises", value: "blanche", img: "chemise-blanche.png" },
      { family: "chemises", value: "à carreaux", img: "chemise-carreaux.png" },
      { family: "pantalons", value: "jeans", img: "jeans.png" },
      { family: "pantalons", value: "chino", img: "chino.png" },
      { family: "robes", value: "d'été", img: "robe-ete.png" },
      { family: "robes", value: "de soirée", img: "robe-soiree.png" },
    );
    break;
    case "objets de la maison":
    deck.push(
      { family: "meubles", value: "canapé", img: "canape.png" },
      { family: "meubles", value: "table basse", img: "table-basse.png" },
      { family: "appareils ménagers", value: "réfrigérateur", img: "frigo.png" },
      { family: "appareils ménagers", value: "lave-linge", img: "lave-linge.png" },
      { family: "vaisselle", value: "assiette", img: "assiette.png" },
      { family: "vaisselle", value: "verre", img: "verre.png" },
      { family: "ustensiles de cuisine", value: "casserole", img: "casserole.png" },
      { family: "ustensiles de cuisine", value: "mixeur", img: "mixeur.png" },
    );
    break;
    // Ajouter d'autres cas pour les autres thèmes
  }
  return deck;
}
// Fonction pour mélanger les cartes du jeu
function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

// Fonction pour distribuer les cartes aux joueurs
function dealCards(numPlayers, deck) {
  const handSize = Math.floor(deck.length / numPlayers);
  const hands = [];
  for (let i = 0; i < numPlayers; i++) {
    const hand = deck.slice(i * handSize, (i + 1) * handSize);
    hands.push(hand);

    // Mélanger le jeu de cartes
    shuffle(deck);

    return deck;
  }

  // Fonction pour distribuer les cartes aux joueurs
  function dealCards(deck, numPlayers) {
    const hands = [];
    for (let i = 0; i < numPlayers; i++) {
      hands.push([]);
    }
    let playerIndex = 0;
    while (deck.length > 0) {
      const card = deck.pop();
      hands[playerIndex].push(card);
      playerIndex++;
      if (playerIndex === numPlayers) {
        playerIndex = 0;
      }
    }
    return hands;
  }

  // Fonction pour mélanger les cartes
  function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  // Fonction pour créer une carte HTML
  function createCardHTML(card) {
    const cardHTML = <div class="card"> <div class="card-image"> <img src="./images/${card.img}" alt="${card.value}"> </div> <div class="card-content"> <div class="content">${card.value}</div> </div> </div> ;
    return cardHTML;
  }

  // Fonction pour créer une liste HTML de cartes
  function createCardListHTML(cards) {
    let listHTML = "";
    for (const card of cards) {
      const cardHTML = createCardHTML(card);
      listHTML += cardHTML;
    }
    return listHTML;
  }

  // Fonction pour mettre à jour l'affichage de la main du joueur
  function updatePlayerHandUI(playerHand) {
    const playerHandHTML = createCardListHTML(playerHand);
    document.querySelector("#player-hand").innerHTML = playerHandHTML;
  }

  // Fonction pour mettre à jour l'affichage du plateau de jeu
  function updateGameBoardUI(gameBoard) {
    const gameBoardHTML = createCardListHTML(gameBoard);
    document.querySelector("#game-board").innerHTML = gameBoardHTML;
  }

  // Fonction pour afficher un message à l'utilisateur
  function displayMessage(message) {
    document.querySelector("#message").textContent = message;
  }

  // Fonction pour effacer le message à l'utilisateur
  function clearMessage() {
    document.querySelector("#message").textContent = "";
  }

  // Initialiser le jeu
  const theme = "animaux";
  const numPlayers = 2;
  const deck = initializeDeck(theme);
  const hands = dealCards(deck, numPlayers);
  const gameBoard = [];

  // Afficher les mains des joueurs et le plateau de jeu
  updatePlayerHandUI(hands[0]);
  updateGameBoardUI(gameBoard);

  // Afficher les mains des joueurs et le plateau de jeu
  function displayGameState() {
    // Afficher la main de chaque joueur
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      const handEl = document.querySelector(#player${i + 1}-hand);
      handEl.innerHTML = "";
      for (let j = 0; j < player.hand.length; j++) {
        const card = player.hand[j];
        const cardEl = document.createElement("div");
        cardEl.classList.add("card");
        cardEl.innerHTML = <div class="card-image"> <img src="./img/${card.img}"> </div> <div class="card-content"> <p>${card.value}</p> </div> ;
        handEl.appendChild(cardEl);
      }
    }

    // Afficher le plateau de jeu
    const boardEl = document.querySelector("#board");
    boardEl.innerHTML = "";
    for (let i = 0; i < board.length; i++) {
      const card = board[i];
      const cardEl = document.createElement("div");
      cardEl.classList.add("card");
      cardEl.innerHTML = <div class="card-image"> <img src="./img/${card.img}"> </div> <div class="card-content"> <p>${card.value}</p> </div> ;
      boardEl.appendChild(cardEl);
    }
  }

  // Fonction pour lancer une partie
  function startGame() {
    // Initialiser le jeu de cartes
    const deck = initializeDeck(theme);

    // Distribuer les cartes aux joueurs
    distributeCards(deck);

    // Choisir un joueur aléatoirement pour commencer
    currentPlayer = Math.floor(Math.random() * players.length);

    // Afficher l'état du jeu
    displayGameState();

    // Afficher le joueur qui commence
    const startingPlayerEl = document.querySelector("#starting-player");
    startingPlayerEl.innerHTML = Le joueur ${currentPlayer + 1} commence;

    // Afficher le message de début de partie
    const messageEl = document.querySelector("#message");
    messageEl.innerHTML = "Bonne chance !";
  }

  // Lancer une partie
  startGame();
  // Fonction pour déterminer le joueur suivant
  function getNextPlayer(currentPlayer, players) {
    const currentIndex = players.indexOf(currentPlayer);
    const nextIndex = (currentIndex + 1) % players.length;
    return players[nextIndex];
  }

  // Fonction pour gérer les demandes de cartes
  function handleCardRequest(requester, requestedPlayer, family, value) {
    const requestedCards = requestedPlayer.hand.filter(card => card.family === family && card.value === value);
    if (requestedCards.length > 0) {
      // Si le joueur a la carte demandée, il doit la donner au joueur demandeur
      const card = requestedCards[0];
      requestedPlayer.hand.splice(requestedPlayer.hand.indexOf(card), 1);
      requester.hand.push(card);
      return true;
    } else {
      // Si le joueur n'a pas la carte demandée, il doit piocher une carte
      const newCard = drawCard();
      requestedPlayer.hand.push(newCard);
      return false;
    }
  }

  // Fonction pour vérifier si un joueur a remporté la partie
  function checkForWinner(players) {
    for (const player of players) {
      if (player.sets.length === 7) {
        return player;
      }
    }
    return null;
  }

  // Variables globales
  let players = [];
  let currentPlayerIndex = 0;
  let currentFamily = "";
  let currentRequestedPlayer = null;

  // Initialiser le jeu de cartes
  const deck = initializeDeck("animaux");

  // Distribuer les cartes aux joueurs
  distributeCards(players, deck);

  // Afficher les mains des joueurs et le plateau de jeu
  displayHands(players);
  displayBoard(currentFamily, currentRequestedPlayer, players);

  // Fonction pour gérer le tour d'un joueur
  function handlePlayerTurn() {
    const currentPlayer = players[currentPlayerIndex];
    let isMyTurn = true;

    while (isMyTurn) {
      // Vérifier s'il y a un gagnant
      const winner = checkForWinner(players);
      if (winner) {
        alert(`${winner.name} a remporté la partie !`);
        return;
      }

      // Afficher les informations du joueur
      displayCurrentPlayer(currentPlayer, currentFamily, currentRequestedPlayer);

      // Demander à l'utilisateur de choisir une carte et un joueur
      const selectedFamily = await askFamilyChoice(currentPlayer, currentFamily);
      const selectedValue = await askCardChoice(currentPlayer, selectedFamily);
      const selectedPlayer = await askPlayerChoice(currentPlayer, players);

      // Gérer la demande de carte
      const success = handleCardRequest(currentPlayer, selectedPlayer, selectedFamily, selectedValue);
      currentFamily = selectedFamily;
      currentRequestedPlayer = selectedPlayer;

      // Si la demande a été fructueuse, le joueur peut continuer à jouer
      if (success) {
        // Vérifier si le joueur a constitué un pli
        checkForSet(currentPlayer);
        // Si le joueur n'a plus de cartes, il a gagné
        if (currentPlayer.hand.length === 0) {
          alert(`${currentPlayer.name} a remporté la partie !`);
          return;
        }
      } else {
        // Si la demande n'a pas été fructueuse, c'est au tour du joueur suivant
        isMyTurn = false;
      }
    }

    // Passer au joueur suivant
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    const nextPlayer = getNextPlayer(currentPlayer, players);
    setTimeout

    // Vérifie si une carte peut être jouée (est dans la main du joueur)
    function canPlayCard(card, hand) {
      return hand.some((c) => c.family === card.family && c.value === card.value);
    }

    // Fonction pour jouer une carte
    function playCard(card, currentPlayer, targetPlayer, game) {
      // Vérifier si la carte peut être jouée
      if (!canPlayCard(card, currentPlayer.hand)) {
        console.log("Cette carte ne peut pas être jouée !");
        return false;
      }

      // Retirer la carte de la main du joueur actuel
      currentPlayer.hand = currentPlayer.hand.filter(
        (c) => c.family !== card.family || c.value !== card.value
      );

      // Ajouter la carte à la pile de cartes jouées
      game.playedCards.push(card);

      // Vérifier si le joueur ciblé possède la carte demandée
      if (targetPlayer.hand.some((c) => c.family === card.family && c.value === card.value)) {
        console.log(`Le joueur ${targetPlayer.name} a la carte demandée !`);
        // Retirer la carte de la main du joueur ciblé
        targetPlayer.hand = targetPlayer.hand.filter(
          (c) => c.family !== card.family || c.value !== card.value
        );
        // Ajouter la carte à la pile de cartes jouées
        game.playedCards.push(card);
        // Vérifier si le joueur a terminé son jeu
        if (currentPlayer.hand.length === 0) {
          console.log(`Le joueur ${currentPlayer.name} a terminé son jeu !`);
          game.winner = currentPlayer;
          game.state = "end";
        }
        return true;
      } else {
        console.log(`Le joueur ${targetPlayer.name} n'a pas la carte demandée !`);
        // Piocher une carte dans la pioche
        const drawnCard = drawCard(game.deck);
        console.log(`Le joueur ${currentPlayer.name} a pioché la carte : ${drawnCard.value} de ${drawnCard.family}`);
        // Ajouter la carte à la main du joueur actuel
        currentPlayer.hand.push(drawnCard);
        // Vérifier si la carte piochée est celle demandée
        if (drawnCard.family === card.family) {
          console.log(`Le joueur ${currentPlayer.name} a pioché la carte demandée !`);
          // Retirer la carte de la main du joueur actuel
          currentPlayer.hand = currentPlayer.hand.filter(
            (c) => c.family !== drawnCard.family || c.value !== drawnCard.value
          );
          // Ajouter la carte à la pile de cartes jouées
          game.playedCards.push(drawnCard);
          // Vérifier si le joueur a terminé son jeu
          if (currentPlayer.hand.length === 0) {
            console.log(`Le joueur ${currentPlayer.name} a terminé son jeu !`);
            game.winner = currentPlayer;
            game.state = "end";
          }
        }
        return false;
      }
    }

    // Fonction pour changer de joueur
    function switchPlayer(game) {
      // Si le joueur actuel est le dernier joueur dans la liste, passer au premier joueur
      if (game.currentPlayerIndex === game.players.length - 1) {
        game.currentPlayerIndex = 0;
      } else {
        game.currentPlayerIndex++;
      }
    }

    // Fonction pour passer au tour suivant
    function nextTurn(game) {
      // Ch
      // Vérifier si le joueur a gagné
      if (player.hand.length === 0) {
        console.log(player.name + " a gagné !");
        winner = player;
        break;
      }
      // Passer au joueur suivant
      activePlayer = (activePlayer + 1) % players.length;
    }

    // Afficher le gagnant
    console.log("La partie est terminée, " + winner.name + " a gagné !");
  }

  // Lancer la partie
  startGame("animaux", ["Alice", "Bob", "Charlie", "David"]);
