<template>
  <div>
    <div class="frame">
      <table class="u-bold">
        <thead>
          <tr>
            <th style="width: 3rem;">Rank</th>
            <th>Name</th>
            <th class="u-tar" style="width: 4rem;">Nation</th>
            <th class="u-tar" style="width: 6rem;">Starting Number</th>
            <th class="u-tar" style="width: 6rem;">Total Segment Score</th>
            <th class="u-tar" style="width: 6rem;">Total Element Score</th>
            <th class="u-tar" style="width: 12rem;">Total<br />Program Component Score (factored)</th>
            <th class="u-tar" style="width: 7rem;">Total Deductions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="u-tar">{{ data.rank }}</td>
            <td>{{ data.name }}</td>
            <td>UZB</td>
            <td class="u-tar">31</td>
            <td class="u-tar">86.01</td>
            <td class="u-tar">43.51</td>
            <td class="u-tar">42.50</td>
            <td class="u-tar">0.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="frame">
      <table>
        <thead>
          <tr>
            <th style="width: 1.5rem;">#</th>
            <th style="width: 20rem;">Executed<br />Elements</th>
            <th style="width: 1rem;">
              <div style="transform: rotate(-90deg)">Info</div>
            </th>
            <th style="width: 4rem;">Base Value</th>
            <th style="width: 1rem;"><!-- Bonus --></th>
            <th style="width: 4rem;">GOE</th>
            <th />
            <th class="u-tac">J1</th>
            <th class="u-tac">J2</th>
            <th class="u-tac">J3</th>
            <th class="u-tac">J4</th>
            <th class="u-tac">J5</th>
            <th class="u-tac">J6</th>
            <th class="u-tac">J7</th>
            <th class="u-tac">J8</th>
            <th class="u-tac">J9</th>
            <th class="u-tac" />
            <th style="width: 2.5rem;">Ref</th>
            <th class="u-tac" style="width: 6rem;">Scores of Panel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="u-tar">1</td>
            <td>3A</td>
            <td />
            <td class="u-tar">8.50</td>
            <td />
            <td class="u-tar">0.29</td>
            <td />
            <td class="u-tac">-1</td>
            <td class="u-tac">0</td>
            <td class="u-tac">1</td>
            <td class="u-tac">0</td>
            <td class="u-tac">1</td>
            <td class="u-tac">0</td>
            <td class="u-tac">0</td>
            <td class="u-tac">0</td>
            <td class="u-tac">1</td>
            <td />
            <td />
            <td class="u-tar">8.79</td>
          </tr>
          <tr>
            <td class="u-tar">2</td>
            <td>3Lz+3T</td>
            <td />
            <td class="u-tar">10.30</td>
            <td />
            <td class="u-tar">0.80</td>
            <td />
            <td class="u-tac">1</td>
            <td class="u-tac">1</td>
            <td class="u-tac">2</td>
            <td class="u-tac">2</td>
            <td class="u-tac">1</td>
            <td class="u-tac">1</td>
            <td class="u-tac">1</td>
            <td class="u-tac">1</td>
            <td class="u-tac">1</td>
            <td />
            <td />
            <td class="u-tar">11.10</td>
          </tr>
          <tr>
            <td class="u-tar">4</td>
            <td>3F</td>
            <td>!</td>
            <td class="u-tar">5.83</td>
            <td>x</td>
            <td class="u-tar">0.50</td>
            <td />
            <td class="u-tac">1</td>
            <td class="u-tac">1</td>
            <td class="u-tac">1</td>
            <td class="u-tac">1</td>
            <td class="u-tac">1</td>
            <td class="u-tac">0</td>
            <td class="u-tac">0</td>
            <td class="u-tac">1</td>
            <td class="u-tac">-1</td>
            <td />
            <td />
            <td class="u-tar">6.33</td>
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td class="u-tar u-bold">38.23</td>
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
            <td class="u-tar u-bold">43.51</td>
          </tr>
          <tr>
            <td />
            <td colspan="4" class="u-bold">Program Components</td>
            <td class="u-tar">Factor</td>
          </tr>
          <tr>
            <td />
            <td colspan="4">Skating Skills</td>
            <td class="u-tar">1.00</td>
            <td />
            <td class="u-tac">8.25</td>
            <td class="u-tac">8.75</td>
            <td class="u-tac">8.25</td>
            <td class="u-tac">8.75</td>
            <td class="u-tac">8.50</td>
            <td class="u-tac">8.25</td>
            <td class="u-tac">8.00</td>
            <td class="u-tac">7.75</td>
            <td class="u-tac">7.50</td>
            <td />
            <td />
            <td class="u-tar">8.25</td>
          </tr>
          <tr>
            <td />
            <td colspan="4" class="u-bold">Judges Total Program Component Score (factored)</td>
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
            <td class="u-tar u-bold">42.50</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style src="./Protocol.css" scoped />
