---
title: "Pimping Linux"
description: "A work-in-progress post exploring customization, tweaks, and theming to make Linux truly yours."
publishDate: "28 Jun 2022"
tags: ["linux", "customization", "tweaks"]
draft: false
showToc: true
---


The ability to customize and theme the Linux desktop is one of the key attracting features of the operating system. You can checkout some of the *best* of these desktops on [r/UnixPorn](https://reddit.com/r/unixporn). This high level of customization is not typically available on Windows or OS X. However, even on Linux, it is not as easy as simply *'clicking a button'*. You could spend many hours tweaking config files to customize your desktop to your taste. Nobody is there to tell you which packages to install or which configurations to set in order to achieve that *riced* desktop feeling. In this guide, we will be abstracting away as much of the configuration as possible, and focusing on getting you setup with a sexy desktop quickly. After following along with this article and completing all of the steps, you will have a much greater knowledge about how the appearance of your Linux desktop works and how to make any changes you may want. Anyways, let's get started.

## **Software We Will Be Using**
1. **{{<underline text="i3wm-gaps">}}** - Window Manager  
  **i3wm** is my favorite window manager due to it's simplicity to setup and use. In fact, on most setups, it works great out the box with a minimalistic look. Config changes can be applied without rebooting/relogging, which is quite handy. We will be using **i3wm-gaps**, which is a fork of the vanilla i3wm. i3wm-gaps stays up to date with the upstream branch of i3wm, so everything should work as expected. We will be opting for i3wm-gaps because of it's ability to put gaps inbetween windows (as the name implies). I think this pairs great with Picom's rounded corners and gives your desktop a sleek uniform look 
2.  **{{<underline text="Polybar">}}**- Status Bar  
   Instead of using the default status bar provided by i3, we are going to be opting for Polybar. Polybar offers more customization options and also has some premade themes that we can find online. First, let's install Polybar.
3. **{{<underline text="Rofi">}}** - Application Launcher & More
4. **{{<underline text="Picom">}}**- Appearance (window transparency & more)  
   Picom is the final touch to your desktop appearance to really start making things look good. Picom has quite a few different things that it can accomplish. You can find all of the available settings on their Github page. Although, we will only be using Picom for transparency and 'rounded corners' for our windows.
5. **{{<underline text="Kitty">}}** - Terminal  
I will be using Arch Linux, however, any distribution will work fine and produce the same results.
Before making customization changes, we are going to install each package first.


### Polybar - Task/Status Bar
Polybar is one of the most versatile status bar packages available. It comes with all of the modules that you may want in your status bar pre-installed into the package. All of Polybar's settings are stored in it's configuration folder inside your *~/.config* directory. There are tons of really cool things you can accomplish by just looking around and making edits within this directory.
####  Arch
{{< highlight go "linenos=table,linenostart=1" >}}
sudo pacman -Syu polybar
{{< /highlight >}}
#### Ubuntu
{{< highlight go "linenos=table,linenostart=1" >}}
sudo add-apt-repository ppa:regolith-linux/release
sudo apt update
sudo apt install polybar
{{< /highlight >}}


### i3WM - Window Manager
####  Arch
{{< highlight go "linenos=table,linenostart=1" >}}
sudo pacman -Syu i3-gaps
{{< /highlight >}}
#### Ubuntu
{{< highlight go "linenos=table,linenostart=1" >}}
sudo add-apt-repository ppa:regolith-linux/release
sudo apt update
sudo apt install i3-gaps
{{< /highlight >}}

### Rofi - Application Launcher
Instead of using i3's default dmenu, we are going to opt for Rofi. Rofi also has themes that you can download / apply to match your system. This is going to be a quick an easy installation, and then we can take a look at the themes available to us.
#### Arch
{{< highlight go "linenos=table,linenostart=1" >}}
sudo pacman -Syu rofi
{{< /highlight >}}
{{< highlight go "linenos=table,linenostart=1" >}}
sudo apt update && sudo apt install rofi
{{< /highlight >}}
{{< highlight go "linenos=table,linenostart=1" >}}
sudo pacman -Syu rofi
{{< /highlight >}}
#### Ubuntu
{{< highlight go "linenos=table,linenostart=1" >}}
sudo add-apt-repository ppa:regolith-linux/release
sudo apt update
sudo apt install rofi
{{< /highlight >}}

### Kitty - Terminal
Kitty is one of my favorite terminals. It comes installed with a theme-manager full of tons of popular color schemes. It supports many commonly needed terminal feautures out of the box with no configuration. I am sure you can apply your desired color scheme to whichever terminal emulator you enjoy using if you do not want to use Kitty.

#### Arch
{{< highlight go "linenos=table,linenostart=1" >}}
sudo pacman -Syu kitty
{{< /highlight >}}
#### Ubuntu
{{< highlight go "linenos=table,linenostart=1" >}}
sudo apt install kitty
{{< /highlight >}}



### Picom - Transparency & Rounded Corners
Picom is the final touch to your desktop appearance to really start making things look good. Picom has quite a few different things that it can accomplish. You can find all of the available settings on their Github page. Although, we will only be using Picom for transparency and 'rounded corners' for our windows.
#### Arch
{{< highlight go "linenos=table,linenostart=1" >}}
sudo pacman -Syu picom
{{< /highlight >}}
#### Ubuntu
{{< highlight go "linenos=table,linenostart=1" >}}
sudo apt install picom
{{< /highlight >}}

## Configuration
![lets-begin-image](/letsbegin.gif)
### Polybar
Polybar works nicely out of the box. Configuration options can be found at the following location:
{{< highlight go>}}
~/.config/polybar
{{< /highlight >}}
However, we are going to be downloading a theme pack to give you some more options. The theme pack we will be using is from Github and can be found at [adi1090x/polybar-themes](https://github.com/adi1090x/polybar-themes).
Installing these themes is easy. CD into your *Downloads* directory and clone the repository. Chmod the install script that is inside and run it.
{{< highlight go "linenos=table,linenostart=1" >}}
git clone --depth=1 https://github.com/adi1090x/polybar-themes.git
cd polybar-themes
chmod +x setup.sh
./setup.sh
{{< /highlight >}}
The installer script is self-explanatory. It places the theme files into *~./config/polybar*.  

Everyone will have their personal preference on their favorite theme. You can launch a specific theme with the following command  
{{< highlight go "linenos=table,linenostart=1" >}}
*bash ~/.config/polybar/launch.sh --material*
{{< /highlight >}}

After finding a theme that you like, you can edit it's layout to fit your liking. Simply CD into the theme's directory and look around the configuration files. The main two files you are going to be wanting to edit are *config.ini* and *colors.ini*. You can change the bar's modules & order by editing the following lines. I've included my configuration here for reference. Another line to notice is the *radius* lines. This is how I achieve the cohesive rounded-corner look.
{{< highlight go "linenos=table,linenostart=1" >}}
[bar/top]
inherit = bar/main
border-bottom-size = 2
border-bottom-color = ${color.primary}
modules-left = launcher sep title
modules-center = cpu sep memory sep filesystem sep updates
modules-right = color-switch sep battery sep checknet sep sysmenu
enable-ipc = true
radius-bottom = 10.0


[bar/bottom]
radius-top = 10.0
inherit = bar/main
bottom = true
border-top-size = 2
border-top-color = ${color.primary}
modules-left = launcher workspaces
modules-center =
modules-right = volume sep date
enable-ipc = true
{{< /highlight >}}




### i3
After i3 finishes installing, you should be able to select it as your desktop environment from your login screen (check the bottom right or left of the screen).
Before logging into i3, let's make sure our configuration is set properly and that we know the basics. i3's configuration file can be found in the following location:
{{< highlight go "linenos=table,linenostart=1" >}}
~/.config/i3/config
{{< /highlight >}}
Let's go ahead and open that up with your favorite editor and make some quick changes.
*note: if the file does not exist please run the command: **i3-config-wizard** in your terminal.*
The first edit we are going to make is setting the gap size between each of our windows. Add the following lines to the top of your file:
{{< highlight go "linenos=table,linenostart=1" >}}
for_window [class=".*"] border pixel 0
gaps inner 10
gaps outer 5
{{< /highlight >}}
**line 1:** removes titlebar from windows and sets border to 0px. If you want a border around your windows, you may change 0 to something else.  
**line 2:** sets gap inbetween windows  
**line 3:** sets gap between screen edge and windows  
The i3 config is pretty self explanatory. We will be coming back here to add in some custom keybinds and add some startup commands to enable our wallpaper. Feel free to look through the config and get familiar. 
One last change I like to do is changing the keybind for *closing an application* from Mod+Shift+Q to just Mod+Q. Search for 'kill focused window' to find the keybind. Here is what mine looks like:
{{< highlight go "linenos=table,linenostart=1" >}}
#kill focused window
bindsym $mod+q kill
{{< /highlight >}}

### Picom
By default, the Picom configuration file is not going to be present. Picom does come with an example configuration file that we can copy into it's proper location. Let's do that now.
{{<highlight go "linenos=table,linenostart=1" >}}
cp /etc/xdg/picom.conf ~/.config/picom/picom.conf
{{</highlight>}}

Go ahead and open up the Picom configuration file. The file has explanatory comments, so feel free to set it how you prefer.
The following lines are the main lines that are responsible for how my configuration looks

{{< highlight go "linenos=table,linenostart=1" >}}
##shadow behind windows to add depth
shadow = true;
shadow-radius = 20;
##transparency on unfocused windows
inactive-opacity = 0.95;

##rounded corners
corner-radius = 15
rounded-corners-exclude = [
    "window_type = 'dock'",
    "window_type = 'desktop'"
]
{{< /highlight >}}

Picom can be started using the command *picom -b*. In the window manager section we added this to our i3 config, which will execute the command once i3 starts.
{{< highlight go "linenos=table,linenostart=1" >}}
##./config/i3/config
exec --no-stratup-id picom -b
{{< /highlight >}}



### Kitty

The Kitty terminal works great out of the box as well. The only thing that needs configuring is the theme, which Kitty comes pre-installed with tons of themes to pick from. For the sake of this tutorial, we will be sticking with the "Catpputtin" theme. You can open Kitty's theme manager with the following command:
{{< highlight go "linenos=table,linenostart=1" >}}
kitty +kitten themes
{{< /highlight >}}
Hit the '/' key to search for the "Catpputtin" theme. Confirm it with 'M' and you're set!  

One final touch is to set transparency via. the Kitty configuration. This will ensure that only the background of the terminal is transparent and not the terminal font itself. You can find your Kitty configuration at the following location: *~/.config/kitty/kitty.conf*
{{< highlight go "linenos=table,linenostart=1" >}}
#~/.config/kitty/kitty.conf
background_opacity 0.85
{{< /highlight >}}
Find the *background_opacity* line in the config and set it to your preferred value.


### GTK - Final Touches
Lastly, we want to theme our GTK engine so that various GUI applications that use GTK are themed accordingly as well.
I am opting for the Catpputtin theme, so we will be using their GTK port, which can be found [Here](https://github.com/catppuccin/gtk).
Visit the [releases page](https://github.com/catppuccin/gtk/releases) and pick your color variation. After downloading, extract the zip and move the contents to your *~/.themes* directory. Finally, edit the GTK configuration file which can be found at */usr/share/gtk-2.0/gtkrc*
{{< highlight go "linenos=table,linenostart=1" >}}
##/usr/share/gtk-2.0/gtkrc
gtk-theme-name = "Catpputtin"
{{< /highlight >}}
Now, GUI applications such as nautilus should be themed accordingly (after restart).



### Wrapping it Up
After completing this tutorial, you should have a much greater understanding of Linux's desktop environment and how each piece fits together. From here, your possibilites are endless to how you can customize your desktop. You can find some of the latest designs on [reddit/r/UnixPorn](reddit.com/r/unixporn) to inspire your next creation. With enough time, you can really make your desktop stand out. I look forward to writing more tutorials related to this subject that I have in mind. I have also been exploring the idea of a "Theme Manager" software that works with these common appearance-based Linux packages and gives you an easy way to save/load themes, as well as import/export them. In the meantime, 

Best Regards, Fetzer




