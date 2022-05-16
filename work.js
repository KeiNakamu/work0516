$(document).ready(function () {
  function score_indicate() {
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
    ];
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);

    let average = sum / subject_points.length;
    $("#average_indicate").text(average);
  };
// 平均点数を取得し、取得した平均点数から「A,B ,C,D」にランク分けする関数を定義します
function get_achievement() {

// 変数「averageIndicate」に
// 平均点数を html 上の id = "average_indicate" から取得して出力します。
let averageIndicate = $("#average_indicate").text();
console.log(averageIndicate)

// もし、「averageIndicate」 が80以上ならAを返します。
if (averageIndicate >= 80) {
  return "A";

// または、「averageIndicate」 が60以上ならBを返します。
  } else if ( averageIndicate >= 60){
    return "B";

// または、「averageIndicate」 が40以上ならCを返します。
    } else if ( averageIndicate >= 40){
    return "C";

// それ以外は、Dを返します。
    } else {
    return "D";
  }
}

// 各教科の点数を取得し、取得した点数から合格、不合格の判断を下す関数を定義します。
function get_pass_or_failure() {

// subuject_pointsの箱に各教科の点数を代入する。
  let subject_points = [Number($('#national_language').val()),
  Number($('#english').val()),
  Number($('#mathematics').val()),
  Number($('#science').val()),
  Number($('#society').val())
  ];

  // 変数「number」に入力した教科の数を代入します。
  let number = subject_points.length;

  // 変数「judge」に"合格"を代入しておきます。
  let judge = "合格";

  // 入力したそれぞれの教科のうち、1つでも60点よりも低い点数があった場合、
  //  変数「judge」に"不合格"を再代入する処理を記述する。
  // 配列に入れた各教科の点数をjudgeする、繰り返し処理を記述してます。
for(let i=0; i<number; i++){
  if(subject_points[i]<60){
    judge= "不合格";

// 　処理が終わるように、ここで記述。
    break;

  }
}

// judgeの結果を返している。
  return judge;
};


function judgement(subject_points) {
  let achievement = get_achievement(subject_points);
  let pass_or_failure = get_pass_or_failure(subject_points);
  $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です。</label>`);
};
$('#national_language, #english, #mathematics, #science, #society').change(function () {
  score_indicate();
});
$('#btn-evaluation').click(function () {
  $("#evaluation").text(get_achievement());
});
$('#btn-judge').click(function () {
  $("#judge").text(get_pass_or_failure());
});
$('#btn-declaration').click(function (){
  let achievement = get_achievement(subject_points);
   let pass_or_failure = get_pass_or_failure(subject_points);
   $("#declaration").text('あなたの成績は${achievement}です。${pass_or_failure}です。')
});
});
