<template>
  <div>
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
                <input v-model="input.rank" type="number" />
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
              UZB
            </td>
            <td class="u-tar">
              31
            </td>
            <td class="u-tar">
              86.01
            </td>
            <td class="u-tar">
              43.51
            </td>
            <td class="u-tar">
              42.50
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
              <!-- Bonus -->
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
          <tr>
            <td class="u-tar">
              1
            </td>
            <td>
              <template v-if="inputMode">
                <input v-model="input.elements[0].abbr" type="text" />
              </template>
              <template v-if="outputMode">
                {{ output.elements[0].abbr }}
              </template>
            </td>
            <td />
            <td class="u-tar">
              {{ output.elements[0].bv }}
            </td>
            <td>
              <template v-if="inputMode">
                <input v-model="input.elements[0].x" type="checkbox" />
              </template>
              <template v-if="outputMode">
                {{ output.elements[0].x ? "x" : "" }}
              </template>
            </td>
            <td class="u-tar">
              {{ output.elements[0].goe }}
            </td>
            <td />
            <td v-for="(item, i) in input.elements[0].j" :key="i" class="u-tac">
              <template v-if="inputMode">
                <input v-model.number="input.elements[0].j[i]" type="number" min="-3" max="3" />
              </template>
              <template v-if="outputMode">
                {{ output.elements[0].j[i] }}
              </template>
            </td>
            <td />
            <td />
            <td class="u-tar">
              {{ output.elements[0].sop }}
            </td>
          </tr>
          <tr>
            <td class="u-tar">
              2
            </td>
            <td>
              3Lz+3T
            </td>
            <td />
            <td class="u-tar">
              10.30
            </td>
            <td />
            <td class="u-tar">
              0.80
            </td>
            <td />
            <td class="u-tac">
              1
            </td>
            <td class="u-tac">
              1
            </td>
            <td class="u-tac">
              2
            </td>
            <td class="u-tac">
              2
            </td>
            <td class="u-tac">
              1
            </td>
            <td class="u-tac">
              1
            </td>
            <td class="u-tac">
              1
            </td>
            <td class="u-tac">
              1
            </td>
            <td class="u-tac">
              1
            </td>
            <td />
            <td />
            <td class="u-tar">
              11.10
            </td>
          </tr>
          <tr>
            <td class="u-tar">
              4
            </td>
            <td>
              3F
            </td>
            <td>
              !
            </td>
            <td class="u-tar">
              5.83
            </td>
            <td>
              x
            </td>
            <td class="u-tar">
              0.50
            </td>
            <td />
            <td class="u-tac">
              1
            </td>
            <td class="u-tac">
              1
            </td>
            <td class="u-tac">
              1
            </td>
            <td class="u-tac">
              1
            </td>
            <td class="u-tac">
              1
            </td>
            <td class="u-tac">
              0
            </td>
            <td class="u-tac">
              0
            </td>
            <td class="u-tac">
              1
            </td>
            <td class="u-tac">
              -1
            </td>
            <td />
            <td />
            <td class="u-tar">
              6.33
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
              43.51
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
          <tr>
            <td />
            <td colspan="4">
              Skating Skills
            </td>
            <td class="u-tar">
              1.00
            </td>
            <td />
            <td v-for="(item, i) in input.ss" :key="i" class="u-tac">
              <template v-if="inputMode">
                <select v-model="input.ss[i]">
                  <option v-for="option in pcOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
              </template>
              <template v-if="outputMode">
                {{ output.ss[i] }}
              </template>
            </td>
            <td />
            <td />
            <td class="u-tar">
              8.25
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
              42.50
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import getScore from "~/assets/js/getScore"

const pcOptions = []
for (let value = 0; value <= 1000; value += 25) {
  pcOptions.push({ value, label: (value / 100).toFixed(2) })
}

export default {
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pcOptions,
      input: {
        rank: 1,
        name: "",
        elements: [
          {
            abbr: "",
            x: false,
            j: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
        ],
        ss: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        tr: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        pe: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        co: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        in: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    }
  },
  computed: {
    output() {
      return getScore(this.input)
    },
    inputMode() {
      return this.mode === "input"
    },
    outputMode() {
      return this.mode === "output"
    },
  },
}
</script>

<style src="./Protocol.css" scoped />
