import commits from './_2019'
import colors from '../../src/_lib/colors'
const mapping = {
  compromise: colors.tulip,
  efrt: colors.tulip,
  expo: colors.tulip,
  'nlp-corpus': colors.tulip,

  somehow: colors.green,
  sometime: colors.green,
  'spencermountain.github.io': colors.green,
  'somehow-circle': colors.green,
  'somehow-graph': colors.green,
  'somehow-maps': colors.green,
  'somehow-input': colors.green,
  'somehow-calendar': colors.green,
  'somehow-ticks': colors.green,
  'somehow-3d': colors.green,
  'spencer-css': colors.green,
  'spencer-color': colors.green,
  thensome: colors.green,

  spacetime: colors.orange,
  'spacetime-holiday': colors.orange,
  'spacetime-week': colors.orange,
  'spacetime-geo': colors.orange,
  'spacetime-informal': colors.orange,
  'spacetime-ticks': colors.orange,

  wtf_wikipedia: colors.blue,
  'wtf-mlb': colors.blue,
  'wtf-nhl': colors.blue,
  'dumpster-dive': colors.blue,
}

export let dotData = Object.keys(commits).map((date) => {
  return {
    value: date,
    label: date,
    dots: commits[date].map((repo) => {
      let color = mapping[repo] || 'grey'
      if (!mapping[repo]) {
        console.log(repo)
      }
      return { color: color, label: repo }
    }),
  }
})
