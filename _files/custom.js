function get_date_str(the_date) {
    var day_names = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
    var month_names = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Septembre", "Octobre", "Novembre", "Décembre");
    var day_in_month = the_date.getDate();
    if (day_in_month < 10) { day_in_month = "0" + day_in_month; }

    return day_names[the_date.getDay()] + ", " + month_names[the_date.getMonth()] + " " + day_in_month + ", " + the_date.getFullYear();
}

var g_now = new Date();
var g_the_date = new Date();

g_the_date = new Date(g_now.getTime()); var g_today_str = get_date_str(g_the_date);

$(".g_today_str").append(g_today_str);


