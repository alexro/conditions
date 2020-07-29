#!/bin/bash

cd ~

mv VMsData/Downloads  VMsData/Downloads-old
mv Downloads VMsData/Downloads
ln -s VMsData/Downloads/ Downloads

mv Documents/ VMsData/Documents
ln -s VMsData/Documents/ Documents

mv Pictures/ VMsData/Pictures
ln -s VMsData/Pictures/ Pictures

mv Music/ VMsData/Music
ln -s VMsData/Music/ Music

mv Videos/ VMsData/Videos
ln -s VMsData/Videos/ Videos

mv Templates/ VMsData/Templates
ln -s VMsData/Templates/ Templates
