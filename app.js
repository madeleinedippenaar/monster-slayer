function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      winner: null,
      currentRound: 0,
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      } else {
          return { width: this.monsterHealth + "%" };
      }
    },
    playerBarStyles() {
        if(this.playerHealth < 0) {
            return {width: "0%"};
        } else {
            return { width: this.playerHealth + "%" };
        }
    }
  },
  watch: {},
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 8);
      console.log(attackValue);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 12);
      this.playerHealth -= attackValue;
    },
  },
});

app.mount('#game');