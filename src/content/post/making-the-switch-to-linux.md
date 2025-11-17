---
title: "You Should Switch to GNU/Linux"
description: "Why using GNU/Linux can improve your workflow, privacy, and system control."
publishDate: "14 May 2022"
tags: ["linux", "gnu", "opensource"]
cover:
  image: "/gnupenguin.png"
  alt: "GNU/Linux"
  caption: "GNU Penguin"
  relative: false
  linkFullImages: true
---




It is important to have an operating system that you enjoy using. It should be able to do everything you need it to do without causing any distractions. Chances are, you are probably using Microsoft Windows, or Apple's OS X. These operating systems have dominated the commercial market and are pre-shipped with pretty much any PC you will buy in a store. It is easy to continue using these operating systems simply because you are familiar with it and you know what to expect. However, it is crucial that our computers work to the best of their ability and do not cause disturbances in our workflow. In the past, I have been reluctant to make the switch to Linux as my daily desktop driver, as I was unsure how it would affect my workflow and the applications I use. I went back and forth between Linux installations and Windows for some time, before finally settling with GNU/Linux for good. I think that part of the reasoning for this is due to how well the GNU/Linux ecosystem has flourished over the years. There is a vast amount of resources available to help you along your GNU/Linux journey. 
In this article, I am going to share some of the awesome things I love about Linux, and why you should consider making the switch.

**Note:** I will be referring to the *'GNU/Linux'* operating system as simply *'Linux'* multiple times throughout this article. However, I would like to acknowledge the hard work of the GNU project... from which the *'Linux'* operating system is derived. I don't know all of the juicy details... but if you want to learn more, visit [GNU.org's Linux & GNU](https://www.gnu.org/gnu/linux-and-gnu.html) article. For the sake of this article, *'Linux'* and *'GNU/Linux'* are both referring to the same *'Linux'* we all know and love.


## Look & Feel
Typically, when users are debating over their favorite operating system, their ultimate argument to support their preference is *"I just like how it looks! (other-OS-here) is ugly!"* This can be closely pinpointed to the user interface differences between OS X and Windows.
Microsoft Windows uses a taskbar-based navigation, while OS X uses a dock-based navigation. Once a user becomes accustomed to one of these interfaces, it becomes very difficult to make a switch. Thankfully, Linux allows the user to pick whichever desktop environment they would like to use, including some bare-bones versions called "window managers". The fact that Linux allows you to pick which desktop you want to run and how you want to run it is the number one selling feauture for me. You are no longer forced to look at things on your computer screen that you wish weren't there. Let's take a look at *Desktop Environments* and then *Window Managers* to find out which one is best for you.

### Linux Desktop Environments
I began my Linux journey using Desktop Environments *(or DE's for short)*. These are the full package method of getting your desktop up and running as quickly as possible. Installing a popular DE will automatically configure most of your sound settings, mouse settings, etc. along with provide you some control panels to modify these. If you are coming from Windows or OS X, then a desktop environment will probably make your transition easier and allow you to compute within your comfort zone.
Many Linux distributions have 'pre-flavored' versions with the desktop environment pre-installed. I do recommend using one of these *distribution flavors*, as the desktop environment will be configured to work with your specific operating system out-the-box. Yet, you can always install (and switch between) multiple different desktop environments if you can't decide on one. I'll give you a list of my favorite DE's, however there are plenty more wonderful DE's available. If you don't see a specific DE on this list it does not necesarily mean it is good or bad... these are just the ones I have enjoyed using.

#### GNOME - for OS X lovers
![gnome-desktop-png](/gnome-desktop.jpg)
  GNOME has been one of my favorite desktop environment since I began using Linux in ~2013. It is the default desktop environment that ships with Ubuntu these days, and for good reason. It is a highly customizable desktop that can achieve a sleek and modern look. Out of the box it may seem a little bland, but there is a great community behind the project that continues to release content. You can combine the GNOME desktop with some popular OS X-inspired themes to achieve a nice Mac replica desktop.
[GNOME Website](https://gnome.org)

#### xfce - for lightweight systems
![xfce-desktop-webp](/xfcedesktop.webp)
XFCE is my personal favorite for an especially lightweight machine. If you are running ancient hardware, XFCE is definitely worth checking out. The desktop is quick and easy to get used to and offers plenty of customization. There is even ways to setup a dock. If you are looking for something even more lightweight, checkout **LXDE**.


#### Cinnamon - for Windows lovers
![cinnamon-desktop-png](/cinnamon-desktop.png)
The Cinnamon desktop ships by default with *Linux Mint*. I have not used the Cinnamon desktop in at least 3 years, however I remember it working great. Personally, I am not a fan of the startmenu/taskbar based desktop environment that Microsoft Windows adopts. Yet, I think Cinnamon does a better job executing it than Microsoft does. This is my goto desktop if I am helping someone switch from Windows to Linux.

#### Deepin - my new goto
![deepin-desktop-png](/deepin-desktop.png)
**I love Deepin**. Previously, Deepin was a full distribution. Meaning, you couldn't install just the desktop environment onto your Ubuntu installation etc. I remember using the full Deepin distro a couple years ago, but not being able to give up Ubuntu at the time. These days, Deepin is available as a standalone desktop environment. So, now you can install it onto any distro you want. The design is somewhat relatable to a hybrid between Windows and OS X. Albeit, with some simple customizations you can configure to be more dock based or vice versa. All of the pre-bundled apps that come with the DE are sleek and pleasant to use. However, I do recommend having beefier hardware.
[Checkout Deepin](https://www.deepin.org/en/dde/)


### Linux Window Managers
Your other option for display managment is a *window manager*. A *window manager* the most barebones approach to a graphical interface for your PC. It is the puzzle piece that controls placement of windows. Window managers are typically organized into workspaces... each workspace acting as it's own desktop. Before I began using a window manager, I imagined them to have less functionality than a full desktop environment. While this may hold true from a vanilla approach... I found this to not be the case as I became familiar with the software. I am currently using **i3-wm** on all of my machines, and it has increased my productivity and workflow without a doubt. I look forward to trying another manager (possibly **dwm**) in the future, but I am going to enjoy i3 for some time longer. 

#### What to expect
Instead of having a dock or taskbar, your windows are typically separated into workspaces which can be navigated between using a special key.
Most functionality of the window manager is accomplished using the special key (normally your command or windows key) combined with another key. For instance, here are some of the keybinds that I use for my i3-wm installation. *note: the mod key is my windows key*
- Mod+D: Opens my application launcher where I can launch any installed app
- Mod+ENTER: Opens a terminal in current workspace
- Mod+Q: Quit current application
- Mod+1,2,3...: Change workspaces
- Mod+SHIFT+1,2,3...: Move window to other workspace
- Mod+W,E,or S: Change window layout

This may seem overwhelming at first, but surprisingly doesn't take very long to learn. Once the muscle memory kicks in, your workflow is noticeably more fluid and productive. If you have never used a window manager before, I recommend trying one to see if you have the same experience. Switching back to desktop environments feels clunky and slow now.

#### Themeing Capabilities:
I have not performed much themeing at all on my window manager installation. However, some of the sleekest and most unique Linux desktops use a window manager. You can achieve wonderful results with a little bit of a time and patience. If you are interested in fully themeing out your Desktop, checkout [This Subreddit](https://reddit.com/r/unixporn)

## GPU Support and Gaming
Before switching my daily driver to Linux, I was using Microsoft's Windows. The biggest reason I was using Windows was for support of my (newer) model video cards. Two of the desktop computers in my house have Nvidia 30 series GPUs in the system. If you are unaware... the 30 series are the latest model cards available from Nvidia. I also enjoy playing video games, hence, the video cards. Linux gaming has not been the best option for gamers in the past years, that is not a secret. On the previous occasions that I have tried to switch my daily-computers to Linux, driver incompatibility and unsupported game titles have eventually forced me back onto Windows.
I can confidently say that this is no longer the case. I was more than surprised to see how far Linux gaming has come along since last time I gave it a shot. If you've never gamed using a **window manager** before, then you are missing out. Handling full-screen games is no longer an issue and is easily managed using my window manager. Unfortunately, support is not 100% guarenteed across all titles, but recently that has been changing rapidly.

### Proton
Most of the credit for the larger availability of Linux supported games can be given to Proton. Proton is a software developed by Valve that allows Microsoft Windows games to run on Linux. This is the software behind the new *SteamDeck* and *SteamOS*. While yes, some games are not yet supported, I believe that we will see these games become supported in the future. Most of the reasons a game is not supported is due to an anti-cheat compatibility or something similar. It is only a matter of time before Valve is able to reach an agreement with anti-cheat companies to get them up and running on Proton.
You can check if your favorite games are supported at [ProtonDB](https://www.protondb.com/).

### Recent NVidia News
There is also another reason that Linux gaming has a bright future. This is because of NVidia's recent decision to open source their Linux drivers. Already, my Nvidia 3070 runs most games *better* than Windows. Yet, on Linux, we do not receive the same driver updates that are pushed to Windows and Mac computers. Users in the community (and some hackers) have been pushing Nvidia to release the source code for their drivers so that users can begin porting them to different systems. NVidia recently released their source code with a statement saying, *"This release is a significant step toward improving the experience of using NVIDIA GPUs in Linux, for tighter integration with the OS, and for developers to debug, integrate, and contribute back,"* [source](https://developer.nvidia.com/blog/nvidia-releases-open-source-gpu-kernel-modules/) I am looking foward to seeing what the open source community is able to do for us. I think this is a huge step forward for Linux, and especially Linux gaming. *Note: There is a lot of controversial discussion around this recent news involving the specifics and copyright of the driver source. I will be re-visiting the subject in a later article where we can dig deeper and see the real implications for the everyday Linux user.*


## Workflow Productivity
Sure, games are fun, and a Batman-themed desktop is pretty cool, but at the end of the day, functionality is the key ingredient. Your operating system needs to work for you, not against you. Your workflow and productivity should reap benefits by whichever operating system you decide to use. It has been a common misconception that Linux causes headaches and disturbs the user's workflow. Many people are afraid to switch to Linux due to thinking they're productivity will deterierate. I am here to inform you that none of that is true, and in fact, Linux will have a positive impact on your daily computing. 
The largest determining factor of how Linux will affect your everyday computer needs is which flavor (or distribution) you decide to install. I believe that the narrative '*Linux is hard to use*' does hold water in some cases, but is not inherently an issue with Unix systems. Comparably, OS X can be equally as challenging for someone who has only used Windows their whole life. If it is your first time using Linux, there will of course be a learning curve. Especially if you choose to install a barebones distribution such as *Gentoo Linux*, you will probably not have a very good experience to begin with. You may even write off Linux as too much trouble than it's worth. However, on the flip side, if you are a veterened Linux user, installing *Gentoo* or *Arch* may give you the perfect amount of control over your system to allow it to work exactly the way you want, maximizing your productivity.

### Picking your Distribution
To begin using Linux, you will need to decide upon a distribution to install. Since Linux is completely open source, many different organizations have developed their own interpretation of how the operating system should run. Linux, by itself, is just the kernel. The kernel is basically the core of the operating system that handles computations. However, you will still need some software to make the operating system usable such as a graphical interface, terminal emulator, file browser, and networking tools. This is where distributions come into the picture. Distributions take on the responsibility of bundling the necessary software and packages required for an enjoyable user experience. Each distribution comes preinstalled with their preferred applications for file managers, browsers, network tools, control panels, calculators, and more. Needless to say, you can install any substitutional or additional software alongside any distribution.

Picking your distribution can be tricky for newcomers. There is a significant amount of Linux distro's available, which can be overwhelming at first. The key differences between distributions is **A)** the target audience *and* **B)** default package manager. Besides these, there is no real *best* distro, as it is all user preference. I am going to run you through some of the distributions I have tried and let you know what I think.

#### Ubuntu - Everyone's Hoe
![ubuntu-logo](/ubuntu-logo.png#center)
You've probably heard about Ubuntu. Ubuntu is the most popular Linux distribution available. It is based on Debian, and uses APT as it's package manager. APT is a lovely package manager that is easy to get used to. When I first began using Linux, Ubuntu was my goto. I could always get things to work on Ubuntu that I was unable to get to work on other distributions. Ubuntu ships with GNOME *desktop environment* by default, however there are other prebuilt flavors available for whichever *DE* you would like to be default on your system. This is one of the great parts about Ubuntu... everything is preconfigured, even for whichever flavor *DE* you may want. This makes Ubuntu a wonderful distro for beginners and experts alike.

[Ubuntu's Website](https://ubuntu.com/)

[KDE Ubuntu](https://kubuntu.org/)

[xUbuntu](https://xubuntu.org/)

[All Flavors](https://xubuntu.org/)

#### Linux Mint - For Windows Users
![mint-logo](/mint-logo.png#center)

Linux Mint goes hand in hand with Cinnamon desktop. Cinnamon is a product of Linux Mint, so the compatibility is seamless. I do not enjoy using the taskbar-based desktop environment such as Window's. However, if you do, this is probably the best distribution for you. Linux Mint is actually based on Ubuntu, so most guides you may find for Ubuntu will probably work on Mint as well. I must say, the pre-shipped applications are especially sleek and a pleasure to use. I definitely recommend giving Mint a try... and if you aren't a fan of *Cinnamon*, they also offer a *MATE* and *XFCE* flavor.
[Linux Mint](https://www.linuxmint.com/)

#### Arch Linux - For Power Users
![arch-logo](/arch-logo.png#center)
Arch Linux is a minimal-based system. This means that most of the configuration depends on the user to setup. Arch does not come with hardly any programs preinstalled. The user is responsible for installing most everything. However, the Arch wiki is extremely helpful. Pretty much every software I have needed to use has a full wiki page available on the official Arch wiki. I can't deny, this feels like an advantage as an Arch user, and is probably the best part about Arch. The installation process is slightly tedious, but the wiki walks you through everything and makes it simple. Even after just completeing the installation process, you will have a much better knowledge of how the Linux operating system works. I have been using Arch for some time now as my daily driver on my desktop and laptop, and I will be sticking with Arch for the foreseeable future. Something to also mention is that Arch uses a **rolling release model**. This means that there are no "major" updates to the distribution that may require you to install a new version. Instead, Arch stays on the cutting edge with small and frequent updates which are installed on the fly using the *Pacman** package manager. If you have some Linux experience, I definitely recommend going through the Arch installation process and giving it a shot.
[Arch Linux](https://archlinux.org/)



## Break it Down
Convincing someone to use GNU/Linux is normally an inevitable task. Most Linux users go down the rabbit hole out of self interest. I hope that this article happens to convince some people to give Linux a try. Especially if you never have before, Linux can be intimidating. It takes time to learn the in's and out's of how things work, although it will increase your computing skills and productivity. I definitely plan to release more articles and tutorials regarding Linux, and I will update this page with those links. 



