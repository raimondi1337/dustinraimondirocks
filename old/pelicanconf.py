#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Dustin'
SITENAME = u'Dustin Raimondi'
SITEURL = 'http://dustin.raimondi.rocks'
SITELOGO = u'http://dustin.raimondi.rocks/avatar.jpg'
OUTPUT_PATH = '/var/www/raimondi.rocks/dustin'

THEME = u'themes/Flex'
PATH = 'content'
STATIC_PATHS = ['images','apps/*']

TIMEZONE = 'America/New_York'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

SOCIAL = (('linkedin', 'https://www.linkedin.com/in/dustin-raimondi-1b198762'),
	('github','https://github.com/raimondi1337'))

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
