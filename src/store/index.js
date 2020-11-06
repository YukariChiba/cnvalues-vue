import Vue from "vue";
import Vuex from "vuex";

import questions from "@/data/questions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    noticeShow: false,
    questions: questions.sort(() => Math.random() - 0.5),
    choices: new Array(questions.length).fill(0),
    currentQuestion: 0,
    scores: []
  },
  mutations: {
    updateNotice(state, val) {
      state.noticeShow = val;
    },
    selectOption(state, val) {
      state.choices[state.currentQuestion] = val;
      state.currentQuestion += 1;
    },
    prevQuestion(state) {
      state.currentQuestion -= 1;
      state.choices[state.currentQuestion] = 0;
    },
    init(state) {
      state.questions = questions.sort(() => Math.random() - 0.5);
      state.choices = new Array(state.questions.length).fill(0);
      state.currentQuestion = 0;
    },
    end(state, val) {
      state.choices[state.currentQuestion] = val;
    },
    calculate: state => {
      let scores = {};
      for (let q of state.questions) {
        for (let axis in q.effect) {
          scores[axis] = 0;
        }
      }

      let max_scores = { ...scores };

      for (let i = 0; i < state.questions.length; i++) {
        for (let axis in state.questions[i].effect) {
          scores[axis] += state.choices[i] * state.questions[i].effect[axis];
          max_scores[axis] += Math.abs(state.questions[i].effect[axis]);
          console.log(scores[axis]);
        }
      }

      for (let axis in scores) {
        scores[axis] =
          (scores[axis] + max_scores[axis]) / (2 * max_scores[axis]);
        scores[axis] = Math.round(scores[axis] * 100);
      }
      state.scores = scores;
    }
  },
  getters: {
    currentQuestion: state => {
      return questions[state.currentQuestion];
    },
    questionsLength: state => {
      return state.questions.length;
    },
    fullyAnswered: state => {
      return state.currentQuestion + 1 == state.questions.length;
    },
    calculate: state => {
      return state.scores;
    }
  },
  modules: {}
});
