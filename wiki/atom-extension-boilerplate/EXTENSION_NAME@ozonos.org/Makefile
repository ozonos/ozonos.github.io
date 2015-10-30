UUID=EXTENSION_NAME_HERE\@ozonos.org
INSTALLDIR=$(DESTDIR)/usr/share/gnome-shell/extensions/$(UUID)

all:

install: local

compile-schema:
	glib-compile-schemas ./schemas/

local: compile-schema
	
	#Create dir if not exist
	mkdir -p $(INSTALLDIR)

	#Clear dir from contents
	-rm -rf $(INSTALLDIR)/*

	#Copy new contents in
	cp -rf . $(INSTALLDIR)

uninstall:
	#Uninstall Extension
	-rm -rf $(INSTALLDIR)
