---
layout: boilerplate
title: Frequently asked questions - Ozon OS
permalink: /faq/
---

# Ozon (operating system)


##### What Linux distribution does Ozon OS use as a base?

Linux From Scratch, of course! Ok, ok, we kid - we use [Fedora 21](https://getfedora.org/) as a solid base for our distribution.


====
##### Why is it not based on Ubuntu, Arch, etc?

Because Jakub Steiner threatened to lock us in a broom closet until we learn to be as good as he is at Blender unless we use Fedora. Nah, it wasn't that. Fedora is simply an amazing base if one is going to be building on top of the GNOME Stack and with Ozon we do just that. Every distribution has pros and cons, but for our case we firmly believe Fedora is the best choice.


====
##### Why Fedora when it has poor font rendering, driver support and media codecs?

Regarding font rendering, while it's true that it's an area Fedora is known to have problems with, Ozon will ship with [FreeType](http://freetype.org/) and our own custom wizardry to remedy this. As for drivers we will do our best to offer a simple and straightforward way to install Vendor Drivers in future versions of Ozon. We've also added pre-installed codecs to cover a wide variety of video and audio format so you will be able to watch movies and listen to music out of the box.

> which [codecs]? -jk-

> do people care which packages exactly are installed? -gk-

> we should probably "what's supported" list somewhere, but not needed of a faq -jf-

> Agreed. -gk-

====
##### What default apps does Ozon ship with?

We debated long and hard over this, but finally came up with [this list](https://github.com/ozonos/ozon-wiki/wiki/Default-Applications) of pre-installed applications. 

You might notice that a few of the usuals such as an email client and office suite are missing. That's because we don't believe an OS should come with more pre-installed apps than needed. If you are looking for additional apps you can find anything your heart desires via 'Software'.

But wait, there's more! In the final release we will have a application that will offer you an even easier way to install the most common software out there.


====
##### What's your release schedule?

Ozon follows the "When It's Ready" agenda, so we're not working on a given deadline. We're only a small team  haven't the resources to full time on Ozon. If we set a release date and we can't keep it we're putting an unmanageable amount of pressure onto ourselves, but even worse we'd be letting our users down.



----
# Atom ES (desktop shell)

##### Isn't Ozon just a bunch of Gnome Themes?
No. Ozon is not definitely not just merely a bunch of themes. This is one completely false statement. Ozon Beta also feature gnome-shell extensions and a set carefully picked default apps and wallpapers. This makes the Ozon Beta an entire custom build desktop shell on top of Gnome.

##### Why create an entirely new OS, why not just the desktop shell you mentioned above?
Correct, we did mention that Ozon's beta is a desktop shell on top of Gnome-Shell, the Ozon final will feature gaming optimisations and a post install utility applications. This justifis the creation of an entire distribution. However if that is not enough reason for you, we've two more:
  -  A full fledged distro gains more tractions and gains it faster than just a desktop shell.
  -  We are planning to sell Ozon hardware too and for that we need an entire OS.

##### Is Atom a fork of Gnome?
No, it is not. Open source is already balkanised enough without us forking a major software stack like Gnome.

##### Why are you using GNOME as a base?
Because we believe Gnome makes high quality open source software when it comes both design and code. 

##### Does this mean I'll be able to use Atom on other operating systems?
¡Sí Señor!, you will be. Just give us some time to whip up repositories for other distros too.


# Gaming

Somebody that know that stuff should answer it. Namely the taco guy - Uri.

##### Why a focus on a gaming OS?
> answer goes here

##### Why does the gaming focus make it better for gaming that other distros (or Windows)?
> answer goes here

##### Are you cooperating with game developers and publishers?﻿
> answer goes here

##### What games will it ship with out of the box?
> answer goes here


# Finances

Not decided just yet.

##### How much will downloading the ISO cost?
> answer goes here

##### Why do I have to pay for the ISO?
> answer goes here

##### Aren't open source products supposed to be free?
> answer goes here

##### Where does my money go when I buy Ozon?
> answer goes here



----
# Development


##### Where is the source code hosted?

All the source code for Ozon is maintained on [our GitHub page](https://github.com/ozonos/).


====
##### Why is it not on [Launchpad](http://launchpad.net/)?

GitHub is more popular than Launchpad, and it's also more accessible to new users. The developers on our team also prefer `git` to `bzr`, the former of which Launchpad doesn't support.


====
##### Who are the developers for Ozon?

Currently we have just one - [Micheal Harker](https://plus.google.com/104260301997466434567/posts). We had more in the past, but they left.

> I think a meet the team page with everyone and their roles listed would be a good addition to this -jf-

> I agree. -gk-

====
##### How do I get involved contributing code?

You wanna help us? Ace! If there's a specific issue which you have in mind just submit a pull request and after it has been checked over we'll merge it in. If you want to get involved with more general development just shoot us an email on ozonosproject@gmail.com with subject "Applying for Ozon developer" and we will talk from there.


====
##### How do I get involved contributing artwork?

This depends on what type of artwork you want to contribute - icons or wallpapers. If you want to do icons, [read this](https://github.com/ozonos/ozon-icon-theme#user-contributions). If you want to contribute wallpapers, [read this](https://www.flickr.com/groups/2722613@N23/rules/) and then submit them to [this flickr group](https://www.flickr.com/groups/2722613@N23).



----
# Hardware

##### Can I use Ozon in Virtual Box?

As of Ozon OS Beta it's not possible to use the OS in Virtualbox. This is because of a bug with the Gnome Shell extension `user-themes` crashing when *any* theme but the default is selected. Therefore the OS will likely crash due to Ozon using a custom theme.

====
##### Can I install Ozon using CD/DVD/USB?
Ozon can't be installed on CDs because it is too big, but it's still smaller than Fedora. However you can install it from DVD or USB perfectly fine.



----
# Other


##### Why isn't this called Numix OS?

Ozon is a joint project between [Numix](https://numixproject.org/) and [Nitrux](http://nitrux.in/).


====
##### Where did the naming schemes come from? Why is Ozone spelled wrong?

Because branding reasons. "Ozone" is more recognisable as the chemical compound that consists of 3 oxygen atoms connected in the following way: ... wait, we shouldn't confuse you with chemistry information. Now us continue. However "Ozon" can be much more recognisable as something else - in our case - a Linux distribution. Once upon a time when we were deciding about the distro and desktop shell name we narrowed it down to two possibilities. Possibility 1 "Ozon OS" with "Atom ES" desktop shell and OS version 1 - "Hydrogen", 2 - "Helium", 3 "Lithium" and so on and so forth, you know how the periodic table goes. Possibility 2 - "Asgard OS", with "Valhalla" desktop shell and version named after Norse gods. Possibility 1 won and as wise people say ... the rest is history.


====
##### Is this a continuation of [Fuduntu](https://en.wikipedia.org/wiki/Fuduntu)?

No, it is not. While there are similarities between the two, the development teams are completely different and we have a completely different vision for what we want our OS to be. 



------------

# Stuff

> Not sure if beta questions should be kept in the FAQ, or a separate beta section somewhere else? -jf-

> But we still need to place it at visible place, it is important.

##### What does 'Beta' mean?
The term 'Beta' in software means that a product is incomplete and needs further testing before becoming a stable product. Ozon Beta is exactly that - incomplete. You won't find much in the way of gaming optimisations, some apps and parts of the desktop experience might be missing, the artwork will be incomplete, and we don't recommend letting your cat browse the web just yet. However that doesn't mean the beta is not usable - it is stable and polished enough for fearless users, so feel free to give it a whirl at your own risk.
