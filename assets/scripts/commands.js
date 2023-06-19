
var commands = {
    params: null,
    services: [],
    cli: [],
    init: function() {
        commands.params =  CodeMirror.fromTextArea(document.getElementById("ApiJson"), { mode: "application/json", lineNumbers: true, extraKeys: {"Ctrl-Space": "autocomplete"}, readOnly: true });
        commands.events();
    },
    events: function(e) {
        $("#IconDownload").click(commands.download);
    },
    set: (services, cli) => {
        $("#OperationCommands").removeClass("open");
        commands.cli = cli;
        commands.services = services;

        $("#ExecutionSteps").html("");

        if (cli.length>0) {
            let html = "";
            for (let i=1; i<=cli.length; i++) {
                html += '<div class="step step'+i+'">'+i+'</div>';
            }
            $("#ExecutionSteps").html(html);
            $(".step").click((e) => {
                let index = Number($(e.currentTarget).html());
                commands.selected(index);
            });
            commands.selected(1);
        }
    },
    selected: (index) => {
        $(".step").removeClass("selected");

        $("#OperationCommands").addClass("open");
        var currentService = commands.services[index-1];

        var currentCli = commands.cli[index-1];
        $("#CLICommands").val(currentCli);

        $("#ApiCall").val(currentService.url);
        commands.params.setValue(JSON.stringify(currentService.params));
        commands.params.autoFormatRange({line:0, ch:0}, {line:commands.params.lineCount()});

        $(".step"+index).addClass("selected");
    },
    download: function(e) {
        var element = document.createElement('a');
        let filename = $("#SServiceName").val().trim().split(' ').join('').replace(/[^a-z0-9]/gi, '').toLowerCase();
        if (window.navigator.platform.indexOf("Win")>=0) filename+=".bat";
        else filename+=".sh";
        let text = "";
        for (let i=0; i<commands.cli.length; i++) {
            text += ((i>0)?"\n":"")+commands.cli[i];
        }
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}