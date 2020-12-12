// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map = null;
var bounds = null;
var infowindow = null;
var marker = null;
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 21.1702401, lng: 72.83106070000008},
        zoom: 13
    });

    bounds = new google.maps.LatLngBounds();
    var latlng = new google.maps.LatLng(21.1702401, 72.83106070000008);
    bounds.extend(latlng);


    var card = document.getElementById('pac-card');
    var input = document.getElementById('pac-input');
    //var types = document.getElementById('type-selector');
    //var strictBounds = document.getElementById('strict-bounds-selector');

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

    var autocomplete = new google.maps.places.Autocomplete(input);

    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', map);

    // Set the data fields to return when the user selects a place.
    autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

    infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    marker = new google.maps.Marker({
        map: map,
        //position: new google.maps.LatLng(21.1702401, 72.83106070000008),
        anchorPoint: new google.maps.Point(0, -29),
        draggable: true
    });

    google.maps.event.addListener(marker, 'dragend', function (evt) {

        //var address = ' lat:' + evt.latLng.lat() + ' long:' + evt.latLng.lng();
        //infowindowContent.children['place-address'].textContent = address;

        //get lat long
        $('#ComplaintLatitude').val(evt.latLng.lat());
        $('#ComplaintLongitude').val(evt.latLng.lng());
    });

    autocomplete.addListener('place_changed', function () {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
        //address = address + ' lat:' + place.geometry.location.lat() + ' long:' + place.geometry.location.lng()
        infowindowContent.children['place-icon'].src = place.icon;
        infowindowContent.children['place-name'].textContent = place.name;
        infowindowContent.children['place-address'].textContent = address;

        //get lat long
        $('#ComplaintLatitude').val(place.geometry.location.lat());
        $('#ComplaintLongitude').val(place.geometry.location.lng());

        infowindow.open(map, marker);
    });

    //// Sets a listener on a radio button to change the filter type on Places
    //// Autocomplete.
    //function setupClickListener(id, types) {
    //    var radioButton = document.getElementById(id);
    //    radioButton.addEventListener('click', function () {
    //        autocomplete.setTypes(types);
    //    });
    //}

    //setupClickListener('changetype-all', []);
    //setupClickListener('changetype-address', ['address']);
    //setupClickListener('changetype-establishment', ['establishment']);
    //setupClickListener('changetype-geocode', ['geocode']);

    //document.getElementById('use-strict-bounds')
    //    .addEventListener('click', function () {
    //        console.log('Checkbox clicked! New state=' + this.checked);
    //        autocomplete.setOptions({ strictBounds: this.checked });
    //    });

}


function fnOpenLocationMapPopup() {
    $('#mdlLocationPopup').modal('show');
}

$(document).ready(function () {

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCvY2P-2fur3vzgTPsgEA1gKWLdOM4zmHI&libraries=places&callback=initMap';
    document.body.appendChild(script);

    $("#mdlLocationPopup").on("shown.bs.modal", function () {
        //google.maps.event.trigger(map, "resize");
    });

    $('#btnGetLocation').click(function () {
        if ($.trim($('#pac-input').val()) == '') {
            alert('Select your Location.');
        } else {
            $('#ComplaintLocation').val($.trim($('#pac-input').val()));
            $('#mdlLocationPopup').modal('hide');

            $('#ComplaintLocation').removeAttr('readonly');
            if ($.trim($('#ComplaintLocation').val()) == '') {
                $('#ComplaintLocation').attr('readonly', 'readonly');
                $('#ComplaintLatitude').val('');
                $('#ComplaintLongitude').val('');
            }
        }
    });

    $('#ComplaintLocation').keyup(function () {
        if ($.trim($('#ComplaintLocation').val()) == '') {
            //$('#ComplaintLocation').attr('readonly', 'readonly');
            $('#ComplaintLatitude').val('');
            $('#ComplaintLongitude').val('');

            $('#pac-input').val('');
            //map.fitBounds(bounds);
            map.setCenter(bounds.getCenter());
            map.setZoom(13);
            infowindow.close();
            marker.setVisible(false);
        }
    });

    $('#ComplaintPhotos').on('change', function () {
        //$('#spnMsgComplaintPhoto').html('');
        $('#divImgPreview').html('');
        if (this.files) {
            var validExtensions = ['jpg', 'jpeg', 'png']; //array of valid extensions
            var noOffiles = $('#ComplaintPhotos')[0].files.length;
            var files = $('#ComplaintPhotos')[0].files;
            var isValid = true;

            if (noOffiles > 2) {
                alert("You can select only 2 images");
                $('#ComplaintPhotos').val('');
                isValid = false;
            }

            if (isValid == true) {
                for (i = 0; i < noOffiles; i++) {

                    isValid = true;

                    //check file extension
                    var fileName = files[i].name;
                    var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
                    if ($.inArray(fileNameExt, validExtensions) == -1) {
                        $('#spnMsgComplaintPhoto').html("Invalid image type. file name: " + fileName);
                        $('#ComplaintPhotos').val('');
                        $('#ComplaintPhotos').focus();
                        isValid = false;
                    }

                    //check file size
                    if (files[i].size > 2097152) {
                        $('#spnMsgComplaintPhoto').html('File size must not be more than 2 MB. file name: ' + fileName);
                        $('#ComplaintPhotos').val('');
                        $('#ComplaintPhotos').focus();
                        isValid = false;
                    }

                    if (isValid == true) {
                        var reader = new FileReader();
                        reader.onload = function (event) {
                            //$($.parseHTML('<img>')).attr('src', event.target.result).appendTo($('#divImgPreview'));
                            //var htmlToAppend = '<div class="divImgPreviewParent"><img src="' + event.target.result + '" class="imgPreview" /><br/><a href="javascript:void(0)" class="imgDelete">Remove</a></div>';
                            var htmlToAppend = '<div class="divImgPreviewParent"><img src="' + event.target.result + '" class="imgPreview" /></div>';
                            $('#divImgPreview').append(htmlToAppend);
                        }
                        reader.readAsDataURL(files[i]);
                    }
                }
            }
        }
    });

    $('#ProfilePhoto').on('change', function () {
        //$('#spnMsgComplaintPhoto').html('');
        $('#divImgPreview').html('');
        if (this.files) {
            var validExtensions = ['jpg', 'jpeg', 'png']; //array of valid extensions
            var noOffiles = $('#ProfilePhoto')[0].files.length;
            var files = $('#ProfilePhoto')[0].files;
            var isValid = true;

            if (noOffiles > 2) {
                alert("You can select only 1 images");
                $('#ProfilePhoto').val('');
                isValid = false;
            }

            if (isValid == true) {
                for (i = 0; i < noOffiles; i++) {

                    isValid = true;

                    //check file extension
                    var fileName = files[i].name;
                    var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
                    if ($.inArray(fileNameExt, validExtensions) == -1) {
                        $('#spnMsgComplaintPhoto').html("Invalid image type. file name: " + fileName);
                        $('#ProfilePhoto').val('');
                        $('#ProfilePhoto').focus();
                        isValid = false;
                    }

                    //check file size
                    if (files[i].size > 2097152) {
                        $('#spnMsgComplaintPhoto').html('File size must not be more than 2 MB. file name: ' + fileName);
                        $('#ProfilePhoto').val('');
                        $('#ProfilePhoto').focus();
                        isValid = false;
                    }

                    if (isValid == true) {
                        var reader = new FileReader();
                        reader.onload = function (event) {
                            //$($.parseHTML('<img>')).attr('src', event.target.result).appendTo($('#divImgPreview'));
                            //var htmlToAppend = '<div class="divImgPreviewParent"><img src="' + event.target.result + '" class="imgPreview" /><br/><a href="javascript:void(0)" class="imgDelete">Remove</a></div>';
                            var htmlToAppend = '<div id="divImgPreview"><img width="120px" src="' + event.target.result + '" alt="Gender Profile Image" class="img-circle mar-r30 mar-b10 img-thumbnail"></div>';
                            $('#divImgPreview').html(htmlToAppend);
                        }
                        reader.readAsDataURL(files[i]);
                    }
                }
            }
        }
    });

    $('#ComplaintVideo').on('change', function () {
        $('#spnMsgComplaintVideo').html('');
        $('#divVideoPreview').html('');
        if (this.files) {
            var validExtensions = ['mp4', 'MP4']; //array of valid extensions
            var noOffiles = $('#ComplaintVideo')[0].files.length;
            var files = $('#ComplaintVideo')[0].files;
            var isValid = true;

            if (noOffiles > 2) {
                alert("You can select only 2 video");
                $('#ComplaintVideo').val('');
                isValid = false;
            }

            if (isValid == true) {
                for (i = 0; i < noOffiles; i++) {

                    isValid = true;

                    //check file extension
                    var fileName = files[i].name;
                    var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
                    if ($.inArray(fileNameExt, validExtensions) == -1) {
                        $('#spnMsgComplaintVideo').html("Invalid Video type. file name: " + fileName);
                        $('#ComplaintPhotos').val('');
                        $('#ComplaintPhotos').focus();
                        isValid = false;
                    }

                    //check file size
                    if (files[i].size > 10097152) {
                        $('#spnMsgComplaintVideo').html('File size must not be more than 10 MB. file name: ' + fileName);
                        $('#ComplaintPhotos').val('');
                        $('#ComplaintPhotos').focus();
                        isValid = false;
                    }

                    if (isValid == true) {
                        var reader = new FileReader();
                        reader.onload = function (event) {
                            //$($.parseHTML('<img>')).attr('src', event.target.result).appendTo($('#divImgPreview'));
                            //var htmlToAppend = '<div class="divImgPreviewParent"><img src="' + event.target.result + '" class="imgPreview" /><br/><a href="javascript:void(0)" class="imgDelete">Remove</a></div>';
                            var htmlToAppend = '<div class="divImgPreviewParent"><iframe src="' + event.target.result + '" class="imgPreview"><iframe></div>';
                            $('#divVideoPreview').append(htmlToAppend);
                        }
                        reader.readAsDataURL(files[i]);
                    }
                }
            }
        }
    });
    //$(document).delegate('.imgDelete', 'click', function () {
    //    $(this).parent().remove();
    //});
    $('.iClear').click(function () {
        $('#spnMsgComplaintPhoto').html('');
        $('#divImgPreview').html('');
        $('#ComplaintPhotos').val('');
    });
    $('.vClear').click(function () {
        $('#spnMsgComplaintVideo').html('');
        $('#divVideoPreview').html('');
        $('#ComplaintVideo').val('');
    });
    $('.pClear').click(function () {
        $('#spnMsgComplaintPhoto').html('');
        var html2 = '<div id="divImgPreview"><img src="http://localhost/smccs//static/Images/man.jpg" alt="Gender Profile Image" class="img-circle mar-r30 mar-b10 img-thumbnail"></div>';
        $('#divImgPreview').html(html2);
        $('#ProfilePhoto').val('');
    });
    $('#btnComplaint').click(function () {
        var isValid = true;
        $('#spnMsg').html('');
        $('#spnMsgComplaintPhoto').html('');

        if ($.trim($('#ComplaintLocation').val()) == '') {
            $('#ComplaintLatitude').val('');
            $('#ComplaintLongitude').val('');
        }

        if ($.trim($('#ComplaintLatitude').val()) == '' || $.trim($('#ComplaintLongitude').val()) == '') {
            $('#spnMsg').html('Please select Location from map');
            $('.btnOpenPooup').focus();
            isValid = false;
        }


        //validate complaint image file
        var validExtensions = ['jpg', 'jpeg', 'png']; //array of valid extensions
        var noOffiles = $('#ComplaintPhotos')[0].files.length;
        var files = $('#ComplaintPhotos')[0].files;

        if (noOffiles > 0) {
            for (var i = 0; i < noOffiles; i++) {
                //check file extension
                var fileName = files[i].name;
                var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
                if ($.inArray(fileNameExt, validExtensions) == -1) {
                    $('#spnMsgComplaintPhoto').html("Invalid image type. file name: " + fileName);
                    $('#ComplaintPhotos').val('');
                    $('#ComplaintPhotos').focus();
                    isValid = false;
                    break;
                }

                //check file size
                if (files[i].size > 2097152) {
                    $('#spnMsgComplaintPhoto').html('File size must not be more than 2 MB. file name: ' + fileName);
                    $('#ComplaintPhotos').val('');
                    $('#ComplaintPhotos').focus();
                    isValid = false;
                    break;
                }
            }
        }

        if (isValid == true) {
            $('#Complaint-form').submit();
            return true;
        } else {
            return false;
        }
    });
});
///////////////////////////////////////////
$(document).ready(function () {
    $('#ComplaintLocation').keyup(function () {
        var len = this.value.length;
        if (len >= 500) {
            this.value = this.value.substring(0, 500);
        }
        $('#charLeft').text(500 - len);
    });
    $('#ComplaintDescription').keyup(function () {
        var len = this.value.length;
        if (len >= 500) {
            this.value = this.value.substring(0, 500);
        }
        $('#char_Left').text(500 - len);
    });
    $('#leaveDescription').keyup(function () {
        var len = this.value.length;
        if (len >= 75) {
            this.value = this.value.substring(0, 75);
        }
        $('#char_Left').text(75 - len);
    });
});



function ClosePopUp() {
    var dv = document.getElementById('divDetails');
    //document.getElementById('dvScroll').style.height = 0 + 'px';
    dv.style.display = 'none';
    return true;
}
function ShowDetails() {
    var dv = document.getElementById('divDetails');
    //var iebody = (document.compatMode && document.compatMode != "BackCompact") ? document.documentElement : document.body;
    // var dsoctop = document.all ? iebody.scrollTop : pageYOffset;
    //var dsocinner = document.all ? iebody.clientHeight : innerHeight;
    //var Ypos = 30;
    //if (dv.style.display == 'none') {
    //    dv.style.top = (screen.availHeight / 2) + 'px';
    //    dv.style.left = (screen.availWidth / 2) + 'px';
    //}
    dv.style.display = 'block';
    MainTable.style.display = 'none';
    tblPersonalInfo.style.display = 'none';
    tblCompalin.style.display = 'none';

    //if (Ypos + dv.offsetHeight > dsocinner) {
    //    document.getElementById('dvScroll').style.height = dv.offsetHeight + 'px';
    //    window.scrollBy((screen.availWidth / 2), (dv.offsetHeight - (dsocinner - Ypos)));
    //    Ypos = Ypos - (dv.offsetHeight - (dsocinner - Ypos));

    //}
    //dv.style.top = (Ypos) + 'px';
    //dv.style.left = (screen.availWidth / 2) - (dv.offsetWidth / 2) + 'px';
    return false;
}
// Load the Google Transliteration API
google.load("elements", "1", {
    packages: "transliteration"
});

var transliterationControl;
function onLoad() {
    var options = {
        sourceLanguage: 'en',
        destinationLanguage: ['gu'],
        transliterationEnabled: false,
        shortcutKey: 'ctrl+g'
    };
    // Create an instance on TransliterationControl with the required
    // options.
    transliterationControl =
            new google.elements.transliteration.TransliterationControl(options);

    // Enable transliteration in the textfields with the given ids.
    var ids = ["ComplaintDescription", "ComplaintLocation"];
    transliterationControl.makeTransliteratable(ids);

    // Add the STATE_CHANGED event handler to correcly maintain the state
    // of the checkbox.
    transliterationControl.addEventListener(
            google.elements.transliteration.TransliterationControl.EventType.STATE_CHANGED,
            transliterateStateChangeHandler);

    // Add the SERVER_UNREACHABLE event handler to display an error message
    // if unable to reach the server.
    transliterationControl.addEventListener(
            google.elements.transliteration.TransliterationControl.EventType.SERVER_UNREACHABLE,
            serverUnreachableHandler);

    // Add the SERVER_REACHABLE event handler to remove the error message
    // once the server becomes reachable.
    transliterationControl.addEventListener(
            google.elements.transliteration.TransliterationControl.EventType.SERVER_REACHABLE,
            serverReachableHandler);

    // Set the checkbox to the correct state.
    document.getElementById('checkboxId').checked = transliterationControl.isTransliterationEnabled();

    // Populate the language dropdown
    var destinationLanguage =
            transliterationControl.getLanguagePair().destinationLanguage;
    var languageSelect = document.getElementById('languageDropDown');
    var supportedDestinationLanguages =
            google.elements.transliteration.getDestinationLanguages(
                    google.elements.transliteration.LanguageCode.ENGLISH);
    for (var lang in supportedDestinationLanguages) {
        var opt = document.createElement('option');
        opt.text = lang;
        opt.value = supportedDestinationLanguages[lang];
        if (destinationLanguage == opt.value) {
            opt.selected = true;
        }
        try {
            languageSelect.add(opt, null);
        } catch (ex) {
            //languageSelect.add(opt);
        }
    }
}

// Handler for STATE_CHANGED event which makes sure checkbox status
// reflects the transliteration enabled or disabled status.
function transliterateStateChangeHandler(e) {
    document.getElementById('checkboxId').checked = e.transliterationEnabled;
}

// Handler for checkbox's click event.	Calls toggleTransliteration to toggle
// the transliteration state.
function checkboxClickHandler() {
    transliterationControl.toggleTransliteration();
}

// Handler for dropdown option change event.	Calls setLanguagePair to
// set the new language.
function languageChangeHandler() {
    var dropdown = document.getElementById('languageDropDown');
    transliterationControl.setLanguagePair(
            google.elements.transliteration.LanguageCode.ENGLISH,
            dropdown.options[dropdown.selectedIndex].value);
}

// SERVER_UNREACHABLE event handler which displays the error message.
function serverUnreachableHandler(e) {
    document.getElementById("errorDiv").innerHTML =
            "Transliteration Server unreachable";
}

// SERVER_UNREACHABLE event handler which clears the error message.
function serverReachableHandler(e) {
    document.getElementById("errorDiv").innerHTML = "";
}
google.setOnLoadCallback(onLoad);

function Check(textBox, maxLength) {
    if (textBox.value.length > maxLength) {
        //alert("You can't enter more than " + maxLength + " characters.");
        $.SMC.alert('<b><i class="fa fa-exclamation-circle pad-r5 text-danger"></i>Warning!</b>', 'You can\'t enter more than ' + maxLength + ' characters.', false);
        textBox.value = textBox.value.substr(0, maxLength);
    }
}

function funSkipValues() {
    if (($('#Phone').val() == '9724345000') || ($('#Phone').val() == '09724345000') || ($('#Phone').val() == '+919724345000') || ($('#Phone').val() == '919724345000')) {
        $('#Phone').val('');
        $.SMC.alert('<b><i class="fa fa-exclamation-circle pad-r5 text-danger"></i>Warning!</b>', 'Please enter proper mobile no', false);
    } else if (($('#EMail').val() == 'commissioner@suratmunicipal.gov.in') || ($('#EMail').val() == 'commissioner@suratmunicipal.org')) {
        $('#EMail').val('');
        $.SMC.alert('<b><i class="fa fa-exclamation-circle pad-r5 text-danger"></i>Warning!</b>', 'Please enter proper email address.', false);
    }
}

$(document).ready(function () {
    $("#ddlComplaintCate").focus();
    $("#ZoneCode").addClass("form-control");
    $('#ddlComplaintCate').change(function (e) {
        var ComplaintCateName = $("#ddlComplaintCate option:selected").text()
        $("#ComplaintCategoryName").val(ComplaintCateName);
        getComplaintCode();
    });

    $('#ZoneCode').change(function (e) {
        var ZoneName = $("#ZoneCode option:selected").text()
        $("#ZoneCodeName").val(ZoneName);
        getWard();
    });

    $('#ComplaintCode').change(function (e) {
        var ComplaintName = $("#ComplaintCode option:selected").text()
        $("#ComplaintCodeName").val(ComplaintName);
    });

    $('#ddlWards').change(function (e) {
        var WardName = $("#ddlWards option:selected").text()
        $("#WardCodeName").val(WardName);
    });

});
function getComplaintCode() {
    var Categories = $('#ddlComplaintCate').val();
    var url = "/OnlineServices/Complaint/getCategories";
    if (Categories != "") {
        $.ajax({
            url: url,
            data: {CategoriesCode: Categories},
            cache: false,
            type: "POST",
            success: function (data) {
                data = data.data;
                var markup = "<option value='0'> Select Complaint Code</option>";
                for (var x = 0; x < data.length; x++) {
                    markup += "<option value=" + data[x].Code + ">" + data[x].Description + "</option>";
                }
                $("#ComplaintCode").html(markup).show();
            }
        });
    } else {
        $("#ComplaintCode").empty();
    }

}
function getWard() {
    var zone = $('#ZoneCode').val();
    var url = "/OnlineServices/Complaint/getWards";
    if (zone != "") {
        $.ajax({
            url: url,
            data: {zonecode: zone},
            cache: false,
            type: "POST",
            success: function (data) {
                data = data.data;
                var markup = "<option value='0'> Select Ward</option>";
                for (var x = 0; x < data.length; x++) {
                    markup += "<option value=" + data[x].CODE + ">" + data[x].NAME + "</option>";
                }
                $("#ddlWards").html(markup).show();
            }
        });
    } else {
        $("#ddlWards").empty();
    }

}