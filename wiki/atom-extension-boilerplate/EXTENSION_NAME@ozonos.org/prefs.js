// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-
/*jshint esnext: true */
/*jshint indent: 4 */



/* BEHOLD!!! I just added this from a test extension, 
 * this still needs some examples for different Gtk Elements 
 * or maybe some convenient function that will make it super-easy for devs to add settings */

const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const GObject = imports.gi.GObject;
const Gtk = imports.gi.Gtk;
const Lang = imports.lang;
const Mainloop = imports.mainloop;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;


const AtomExtensionSettingsWidget = new GObject.Class({
    Name: 'AtomExtension.AtomExtensionSettingsWidget',
    GTypeName: 'AtomExtensionSettingsWidget',
    Extends: Gtk.Grid,

    _init: function() {
        this.parent({ halign: Gtk.Align.CENTER,
                      margin: 24,
                      column_spacing: 12,
                      row_spacing: 6 });

        this.settings = Convenience.getSettings('org.gnome.shell.extensions.atom-hotcorners');
 
        /* Hot Corner Top Left */
        let hotCornerTopLeft = new Gtk.ComboBoxText();
        hotCornerTopLeft.append('none', "No Action");
        hotCornerTopLeft.append('show-windows', "Show Windows");
        hotCornerTopLeft.append('show-applications', "Show Applications");
        hotCornerTopLeft.append('show-notifications', "Show Notifications");
        hotCornerTopLeft.append('workspace-next', "Go to next Workspace");
        this.settings.bind('top-left', hotCornerTopLeft, 'active-id',
                            Gio.SettingsBindFlags.DEFAULT);

        this._addRow(1, "Top Left Corner", hotCornerTopLeft);

        /* Hot Corner Top Right*/
        let hotCornerTopRight = new Gtk.ComboBoxText();
        hotCornerTopRight.append('none', "No Action");
        hotCornerTopRight.append('show-windows', "Show Windows");
        hotCornerTopRight.append('show-applications', "Show Applications");
        hotCornerTopRight.append('show-notifications', "Show Notifications");
        hotCornerTopRight.append('workspace-next', "Go to next Workspace");
        this.settings.bind('top-right', hotCornerTopRight, 'active-id',
                            Gio.SettingsBindFlags.DEFAULT);

        this._addRow(2, "Top Right Corner", hotCornerTopRight);

        /* Hot Corner Bottom Left*/
        let hotCornerBottomLeft = new Gtk.ComboBoxText();
        hotCornerBottomLeft.append('none', "No Action");
        hotCornerBottomLeft.append('show-windows', "Show Windows");
        hotCornerBottomLeft.append('show-applications', "Show Applications");
        hotCornerBottomLeft.append('show-notifications', "Show Notifications");
        hotCornerBottomLeft.append('workspace-next', "Go to next Workspace");
        this.settings.bind('bottom-left', hotCornerBottomLeft, 'active-id',
                            Gio.SettingsBindFlags.DEFAULT);

        this._addRow(3, "Bottom Left Corner", hotCornerBottomLeft);

        /* Hot Corner Bottom Left*/
        let hotCornerBottomRight = new Gtk.ComboBoxText();
        hotCornerBottomRight.append('none', "No Action");
        hotCornerBottomRight.append('show-windows', "Show Windows");
        hotCornerBottomRight.append('show-applications', "Show Applications");
        hotCornerBottomRight.append('show-notifications', "Show Notifications");
        hotCornerBottomRight.append('workspace-next', "Go to next Workspace");
        this.settings.bind('bottom-right', hotCornerBottomRight, 'active-id',
                            Gio.SettingsBindFlags.DEFAULT);

        this._addRow(4, "Bottom Right Corner", hotCornerBottomRight);


    },
    _addRow: function(row, label, widget) {
        let margin = 48;

        widget.margin_end = margin;
        widget.hexpand = true;

        if (!this._sizeGroup)
            this._sizeGroup = new Gtk.SizeGroup({ mode: Gtk.SizeGroupMode.VERTICAL });
        this._sizeGroup.add_widget(widget);

        this.attach(new Gtk.Label({ label: label, xalign: 1.0,
                                    margin_start: margin }), 0, row, 1, 1);
        this.attach(widget, 1, row, 1, 1);
    }
});

function init() {
    /* No code needed here */
}

function buildPrefsWidget() {
    let widget = new AtomExtensionSettingsWidget({orientation: Gtk.Orientation.VERTICAL,
                                                spacing:5, border_width:5});
    widget.show_all();
    return widget;
}

