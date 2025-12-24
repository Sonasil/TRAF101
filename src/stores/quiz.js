import { defineStore } from 'pinia';
import { questions as allQuestions } from '../data/questions';

// Quiz Configuration
const QUIZ_CONFIG = {
    QUESTIONS_PER_TEST: 20,
    PASSING_SCORE_PERCENTAGE: 70
};

export const useQuizStore = defineStore('quiz', {
    state: () => ({
        licenseType: null,
        questions: [],
        userAnswers: [], // Array of option IDs
        currentQuestionIndex: 0,
        startTime: null,
        endTime: null,
    }),

    getters: {
        currentQuestion: (state) => state.questions[state.currentQuestionIndex],
        totalQuestions: (state) => state.questions.length,
        isFinished: (state) => state.currentQuestionIndex >= state.questions.length,
        progress: (state) => ((state.currentQuestionIndex) / state.questions.length) * 100,
        score: (state) => {
            return state.questions.reduce((acc, question, index) => {
                const userAnswer = state.userAnswers[index];
                if (question.correctOptionIds.includes(userAnswer)) {
                    return acc + 1;
                }
                return acc;
            }, 0);
        }
    },

    actions: {
        startQuiz(licenseType) {
            this.reset();
            this.licenseType = licenseType;
            this.startTime = Date.now();

            // Filter questions relevant to the license type
            // And Shuffle them (simple random sort)
            this.questions = allQuestions
                .filter(q => q.licenseTypeIds.includes(licenseType))
                .sort(() => Math.random() - 0.5)
                .slice(0, QUIZ_CONFIG.QUESTIONS_PER_TEST);
        },

        submitAnswer(optionId) {
            this.userAnswers[this.currentQuestionIndex] = optionId;
            if (this.currentQuestionIndex < this.questions.length) {
                this.currentQuestionIndex++;
            }
            if (this.isFinished) {
                this.endTime = Date.now();
            }
        },

        reset() {
            this.licenseType = null;
            this.questions = [];
            this.userAnswers = [];
            this.currentQuestionIndex = 0;
            this.startTime = null;
            this.endTime = null;
        }
    }
});
