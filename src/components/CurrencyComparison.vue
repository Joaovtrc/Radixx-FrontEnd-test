<script lang="ts">
export default {
  props: ["mainCurrencyTag", "comparedCurrencyTag", "value"],
};
</script>

<template>
  <el-card class="box-card currency-card">
    <div class="text item">
      <div>
        1 {{ mainCurrencyTag }} = {{ `${value} ${comparedCurrencyTag}` }}
      </div>
    </div>
  </el-card>
</template>

<style>
.currency-card {
  margin-top: 8px;
}
</style>
