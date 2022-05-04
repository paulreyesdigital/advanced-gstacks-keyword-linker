var urls = [
	'https://www.google.com/maps/place/Pro+Carpet+Cleaning+Swansea/@51.7678883,-3.7845729,17z/data=!3m1!4b1!4m5!3m4!1s0x486e5af5ac7dc8cb:0x562c27ff9a769e2e!8m2!3d51.7678883!4d-3.7823842',
	'https://maps.google.com/maps?cid=6209381964998680110',
	'https://www.google.com/search?q=Pro+Carpet+Cleaning+Swansea&kponly&kgmid=/g/1s04bs0r8',
	'https://local.google.com/place?id=6209381964998680110&use=srp',
	'https://pro-carpet-cleaning-carpet-cleaning-service.business.site/',
	'https://sites.google.com/view/pro-carpet-cleaning-swansea/Pro-Carpet-Cleaning-Swansea',
	'https://www.procarpetcleaningswansea.co.uk/',
	'https://www.pearltrees.com/procarpetcleaningswansea',
	'https://www.youtube.com/channel/UC_DVCRKOHOS1O1ljvslNuZA',
	'https://twitter.com/proswansea',
	'https://procarpetcleaningswansea.weebly.com/',
	'https://pro-carpet-cleaning-swansea.blogspot.com/',
	'https://drive.google.com/drive/folders/1tpfso2sAlrLV6PX2rgbhtxONnbpymnSg?usp=sharing',
	'https://drive.google.com/drive/folders/1DY03W-DoUqDOp2LhUD_lDG-znI_15KCT?usp=sharing',
	'https://drive.google.com/drive/folders/1i8tGE-XcXzgrniE5v86M5ODkHCue0K9o?usp=sharing',
	'https://drive.google.com/drive/folders/11vWn-ZNEFB8_OLINslf3ZyRtqkwuVycq?usp=sharing',
	'https://drive.google.com/drive/folders/1auhiCe_fi-0ueTf4gnUrk42jeVCsIcbN?usp=sharing',
	'https://forms.gle/9HRXEikD3CNzEjKG9',
	'https://docs.google.com/drawings/d/e/2PACX-1vQq0TVZxajwgbBzn1uNeI9YkdBZnNnzpZujMidQeiy9k9vDT3A1PDhSTCjiPTSt_wt6COS7_yK5mpKr/pub?w=960&h=720',
	'https://docs.google.com/presentation/d/e/2PACX-1vQv8gyXs_DyYfuqa_n-kj6m5iL8rAQ6QuyrcGr1CzOX0-iJCeSQZU03sLVT8szsbry3vpWO4ul_SBvn/pub?start=true&loop=true&delayms=10000',
	'https://docs.google.com/spreadsheets/d/e/2PACX-1vTqj0NCXElZLqwOGs5D0O_1ks3O9PTJxCYSE8D0L_XeSr9FQvRyPR3IuBChjkCihf47xA8g8T6f-u7d/pubhtml',
	'https://www.google.com/maps/d/u/0/edit?mid=1CzZ358t5bK77SOC8sGVW4ERw04oX2CT5&usp=sharing',
	'https://docs.google.com/spreadsheets/d/e/2PACX-1vTqj0NCXElZLqwOGs5D0O_1ks3O9PTJxCYSE8D0L_XeSr9FQvRyPR3IuBChjkCihf47xA8g8T6f-u7d/pubhtml',
	'https://docs.google.com/document/d/e/2PACX-1vQ4_Jw7wqKcMD4Wcr2VrXUFjU1jp1wmQdvTlQo4G1H8sL-7HNlgNFYqXpECRpV6ZWqErCt1iUGnfaTD/pub',
	'https://docs.google.com/document/d/e/2PACX-1vTcHaVcQY9x0ADdtbrVgx3OYrHGtrnXmC3aAxR9ckEXfdL3SlfrcqV7M1bGJv9auoAgcn-8mDKlygs3/pub',
	'https://docs.google.com/document/d/e/2PACX-1vSSgRx0nV-TcJuvYPsqoFlAP_mZZ21_ewNJn0G7T9vXnDP0iTGCSiFNaryFK0Jj5RbqrUCuaP1TshrM/pub',
	'https://docs.google.com/document/d/e/2PACX-1vRI_bkpgjXkShSitL-nGIJJM-422WrKa-we9JnRYuZrQoL0s9qATztw51Gl20zgSrEeZm54D84AkWjE/pub',
	'https://docs.google.com/document/d/e/2PACX-1vSbl5EDBOPhYytqoHsXpFzsaBjNbqk7VToIbD6bLFRicLgwqzcUMCalCniJRsoxYu3waqx7NJs4QSw5/pub',
	'https://docs.google.com/document/d/e/2PACX-1vS3lkiNxL2lOt5MlEXX8R5DTfZPJ4OUwl5b166XpzBNUGW9_0XoEbIHhzqMZS_SKGvff4yZHPHf897c/pub',
	'https://docs.google.com/presentation/d/e/2PACX-1vQv8gyXs_DyYfuqa_n-kj6m5iL8rAQ6QuyrcGr1CzOX0-iJCeSQZU03sLVT8szsbry3vpWO4ul_SBvn/pub?start=false&loop=false&delayms=3000',
	'https://docs.google.com/presentation/d/e/2PACX-1vR9c5i3ynYQaCWx11mBmK8rkWm9D_Ji8fT8U_NApWj0AFdLBKZJiqPoZRbFzIIJDIuiW1ICtrIZ2qu5/pub?start=false&loop=false&delayms=3000',
	'https://docs.google.com/presentation/d/e/2PACX-1vS31HCa7jaQMQJS49B8QsS1mo9WrjK2yy3SMulvL8PGuEhPEBYo_maumuixE-Iz_LqRpYrZOMM9mEBV/pub?start=false&loop=false&delayms=3000',
	'https://docs.google.com/presentation/d/e/2PACX-1vRfbMLtplCNeG-D4LN12XYgXpDvDmUmZmx6ISEm7jKBCvIUB7OJiiDLWW8MAbyE2sSAbFNKKOwH5-r7/pub?start=false&loop=false&delayms=3000',
	'https://docs.google.com/presentation/d/e/2PACX-1vSApe1tnIlS1d_L_VLnq-wnQwixdjaMPP6_MzcqkCRIuE_ADqaYLmZvkA7llF5ciBSJfvcp6uneudzX/pub?start=false&loop=false&delayms=3000',
	'https://docs.google.com/presentation/d/e/2PACX-1vTIVgCyqLlO3ynYqHP3yoC4Jmr06op2ZxIlWOO_msZpb_fegapxPit7rdO0a-i_9lWfyJ8pmtec2GYF/pub?start=false&loop=false&delayms=3000',
	'https://www.cityyap.com/united-kingdom/ystalyfera/local-services/pro-carpet-cleaning-swansea',
	'https://logopond.com/procleaninguk/profile/520545/?filter=&page=',
	'https://www.deviantart.com/procleaninguk/about',
	'https://vimeo.com/user159669855',
	'https://www.yell.com/biz/pro-carpet-cleaning-swansea-swansea-7738526/',
	'https://calendar.google.com/calendar/embed?src=0gqbatdvjk2dfvknj5bi6j7rg4%40group.calendar.google.com&ctz=Asia%2FManila',
	'https://drive.google.com/drive/folders/121wlkEQQTbi3U_vAZgGXAxkmkq77aWnD?usp=sharing',
];
