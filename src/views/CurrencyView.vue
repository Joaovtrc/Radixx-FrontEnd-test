<script lang="ts">
import CurrencyComparison from "../components/CurrencyComparison.vue";
const API_URL = "https://localhost:7133";

export default {
  data: () => ({
    loading: true,
    currentBranch: "main",
    currencies: {
      USD_EUR: 0,
      EUR_USD: 0,
    },
  }),
  watch: {
    // re-fetch whenever currentBranch changes
    currentBranch: "fetchData",
  },
  methods: {
    async getCurrencies() {
      this.loading = true;
      this.currencies = await (await fetch(`${API_URL}/currencies`)).json();
      this.loading = false;
    },
  },
  components: { CurrencyComparison },
};
</script>

<template>
  <div class="flex-col">
    <el-button type="primary" @click="getCurrencies()">
      Get the current values for USD/EUR!
    </el-button>

    <div v-if="!loading">
      <CurrencyComparison
        mainCurrencyTag="USD"
        comparedCurrencyTag="EUR"
        :value="currencies.USD_EUR"
      ></CurrencyComparison>

      <CurrencyComparison
        mainCurrencyTag="EUR"
        comparedCurrencyTag="USD"
        :value="currencies.EUR_USD"
      ></CurrencyComparison>
    </div>
  </div>
</template>

<style>
.flex-col {
  display: flex;
  flex-direction: column;
}
</style>
