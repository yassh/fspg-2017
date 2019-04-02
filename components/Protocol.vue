<template>
  <section>
    <div class="title">
      <template v-if="inputMode">
        <input v-model.number="input.title" type="text" placeholder="Title" />
      </template>
      <template v-if="outputMode">
        <h1>
          {{ output.title }}
        </h1>
      </template>
    </div>
    <div class="frame">
      <table class="u-bold">
        <thead>
          <tr>
            <th style="width: 3rem;">
              Rank
            </th>
            <th>
              Name
            </th>
            <th class="u-tar" style="width: 4rem;">
              Nation
            </th>
            <th class="u-tar" style="width: 6rem;">
              Starting Number
            </th>
            <th class="u-tar" style="width: 6rem;">
              Total Segment Score
            </th>
            <th class="u-tar" style="width: 6rem;">
              Total Element Score
            </th>
            <th class="u-tar" style="width: 12rem;">
              Total<br />Program Component Score (factored)
            </th>
            <th class="u-tar" style="width: 7rem;">
              Total Deductions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="u-tar">
              <template v-if="inputMode">
                <input v-model.number="input.rank" type="number" min="1" />
              </template>
              <template v-if="outputMode">
                {{ output.rank }}
              </template>
            </td>
            <td>
              <template v-if="inputMode">
                <input v-model="input.name" type="text" />
              </template>
              <template v-if="outputMode">
                {{ output.name }}
              </template>
            </td>
            <td>
              <template v-if="inputMode">
                <input v-model="input.nation" type="text" />
              </template>
              <template v-if="outputMode">
                {{ output.nation }}
              </template>
            </td>
            <td class="u-tar">
              <template v-if="inputMode">
                <input v-model.number="input.startingNumber" type="number" min="1" />
              </template>
              <template v-if="outputMode">
                {{ output.startingNumber }}
              </template>
            </td>
            <td class="u-tar">
              {{ output.tss | toCentesimal | toFixed }}
            </td>
            <td class="u-tar">
              {{ output.tes | toCentesimal | toFixed }}
            </td>
            <td class="u-tar">
              {{ output.tpcs | toCentesimal | toFixed }}
            </td>
            <td class="u-tar">
              0.00
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="frame">
      <table>
        <thead>
          <tr>
            <th style="width: 1.5rem;">
              #
            </th>
            <th style="width: 20rem;">
              Executed<br />Elements
            </th>
            <th style="width: 1rem;">
              <div style="transform: rotate(-90deg)">
                Info
              </div>
            </th>
            <th style="width: 4rem;">
              Base Value
            </th>
            <th style="width: 1rem;">
              <template v-if="inputMode">
                x
              </template>
            </th>
            <th style="width: 4rem;">
              GOE
            </th>
            <th />
            <th class="u-tac">
              J1
            </th>
            <th class="u-tac">
              J2
            </th>
            <th class="u-tac">
              J3
            </th>
            <th class="u-tac">
              J4
            </th>
            <th class="u-tac">
              J5
            </th>
            <th class="u-tac">
              J6
            </th>
            <th class="u-tac">
              J7
            </th>
            <th class="u-tac">
              J8
            </th>
            <th class="u-tac">
              J9
            </th>
            <th class="u-tac" />
            <th style="width: 2.5rem;">
              Ref
            </th>
            <th class="u-tac" style="width: 6rem;">
              Scores of Panel
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(element, elementIndex) in input.elements" v-if="!(outputMode && element.abbr === '')" :key="elementIndex">
            <td class="u-tar">
              {{ elementIndex + 1 }}
            </td>
            <td>
              <template v-if="inputMode">
                <input v-model="input.elements[elementIndex].abbr" type="text" />
              </template>
              <template v-if="outputMode">
                {{ output.elements[elementIndex].abbr }}
              </template>
            </td>
            <td />
            <td class="u-tar">
              {{ output.elements[elementIndex].bv | toCentesimal | toFixed }}
            </td>
            <td>
              <template v-if="inputMode">
                <input v-model="input.elements[elementIndex].x" type="checkbox" />
              </template>
              <template v-if="outputMode">
                {{ output.elements[elementIndex].x ? "x" : "" }}
              </template>
            </td>
            <td class="u-tar">
              {{ output.elements[elementIndex].goe | toCentesimal | toFixed }}
            </td>
            <td />
            <td v-for="(j, jIndex) in element.j" :key="jIndex" class="u-tac">
              <template v-if="inputMode">
                <select v-model="input.elements[elementIndex].j[jIndex]">
                  <option v-for="option in goeOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
              </template>
              <template v-if="outputMode">
                {{ output.elements[elementIndex].j[jIndex] }}
              </template>
            </td>
            <td />
            <td />
            <td class="u-tar">
              {{ output.elements[elementIndex].sop | toCentesimal | toFixed }}
            </td>
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td class="u-tar u-bold">
              38.23
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td class="u-tar u-bold">
              {{ output.tes | toCentesimal | toFixed }}
            </td>
          </tr>
          <tr>
            <td />
            <td colspan="4" class="u-bold">
              Program Components
            </td>
            <td class="u-tar">
              Factor
            </td>
          </tr>
          <tr v-for="row in [
            { label: 'Skating Skills', id: 'skatingSkills' },
            { label: 'Transitions', id: 'transitions' },
            { label: 'Performance', id: 'performance' },
            { label: 'Composition', id: 'composition' },
            { label: 'Interpretation of the Music', id: 'interpretation' },
          ]" :key="row.id"
          >
            <td />
            <td colspan="4">
              {{ row.label }}
            </td>
            <td class="u-tar">
              <template v-if="inputMode">
                <select v-model="input.programComponents.factor">
                  <option v-for="option in pcFactorOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
              </template>
              <template v-if="outputMode">
                {{ output.programComponents.factor | toFixed }}
              </template>
            </td>
            <td />
            <td v-for="(j, jIndex) in input.programComponents[row.id].j" :key="jIndex" class="u-tac">
              <template v-if="inputMode">
                <select v-model="input.programComponents[row.id].j[jIndex]">
                  <option v-for="option in pcOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
              </template>
              <template v-if="outputMode">
                {{ output.programComponents[row.id].j[jIndex] }}
              </template>
            </td>
            <td />
            <td />
            <td class="u-tar">
              {{ output.programComponents[row.id].sop | toCentesimal | toFixed }}
            </td>
          </tr>
          <tr>
            <td />
            <td colspan="4" class="u-bold">
              Judges Total Program Component Score (factored)
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td class="u-tar u-bold">
              {{ output.tpcs | toCentesimal | toFixed }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="frame">
      <table>
        <tbody>
          <tr>
            <td style="width: 1.5rem;" />
            <td class="u-bold" style="width: 8rem;">
              Deductions
            </td>
            <td class="u-tar">
              Falls: -2.00(2)
            </td>
            <td class="u-tar">
              Falls: -2.00(2)
            </td>
            <td class="u-tar" />
            <td class="u-tar u-bold" style="width: 6rem;">
              -1.00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import _ from "lodash"
import getOutput from "~/assets/js/getOutput"

const goeOptions = [{ value: null, label: "" }]
for (let value = 3; value >= -3; value -= 1) {
  goeOptions.push({ value, label: value.toString() })
}

const pcFactorOptions = [
  { value: 0.8, label: "0.80" },
  { value: 1, label: "1.00" },
  { value: 1.6, label: "1.60" },
  { value: 2, label: "2.00" },
]

const pcOptions = [{ value: null, label: "" }]
for (let value = 1000; value >= 0; value -= 25) {
  pcOptions.push({ value, label: (value / 100).toFixed(2) })
}

export default {
  filters: {
    toCentesimal(value) {
      return value / 100
    },
    toFixed(value) {
      return value.toFixed(2)
    },
  },
  props: {
    mode: {
      type: String,
      required: true,
    },
    savedInput: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      goeOptions,
      pcOptions,
      pcFactorOptions,
      input: {
        title: "",
        rank: 1,
        name: "",
        nation: "",
        startingNumber: 1,
        elements: _.times(13, () => ({
          abbr: "",
          x: false,
          j: [null, null, null, null, null, null, null, null, null],
        })),
        programComponents: {
          factor: 1,
          skatingSkills: {
            j: [null, null, null, null, null, null, null, null, null],
          },
          transitions: {
            j: [null, null, null, null, null, null, null, null, null],
          },
          performance: {
            j: [null, null, null, null, null, null, null, null, null],
          },
          composition: {
            j: [null, null, null, null, null, null, null, null, null],
          },
          interpretation: {
            j: [null, null, null, null, null, null, null, null, null],
          },
        },
        deductions: [
          {
            type: "",
            point: 0,
          },
          {
            type: "",
            point: 0,
          },
          {
            type: "",
            point: 0,
          },
        ],
        ...this.savedInput,
      },
    }
  },
  computed: {
    output() {
      return getOutput(this.input)
    },
    inputMode() {
      return this.mode === "input"
    },
    outputMode() {
      return this.mode === "output"
    },
  },
  watch: {
    input: {
      handler(value) {
        this.$emit("input", value)
      },
      deep: true,
    },
  },
}
</script>

<style src="./Protocol.css" scoped />
