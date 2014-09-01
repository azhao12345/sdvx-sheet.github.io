﻿// Create DB
var music_db = TAFFY([
    { value: "hanakagerou_e", title: "華陽炎-Hana Kagerou-", type: 3, level: 13 },
    { value: "lunatic_rough_party_e", title: "Lunatic Rough Party!!", type: 3, level: 13 },
    { value: "lostone_e", title: "ロストワンの号哭", type: 3, level: 13 },
    { value: "eight_e", title: "8 -eight-", type: 3, level: 14 },
    { value: "antinomie_e", title: "Antinomie (SDVX EDIT)", type: 3, level: 14 },
    { value: "bubble_raver_e", title: "BUBBLE RAVER", type: 3, level: 14 },
    { value: "cirno_break_e", title: "Cirno Break", type: 3, level: 14 },
    { value: "crazy_cinema_story_e", title: "crazy cinema story", type: 3, level: 14 },
    { value: "daily_lunch_special_deliciousremix_e", title: "Daily Lunch Special ～DeliciousREMIX～", type: 3, level: 14 },
    { value: "dawn_of_asia_e", title: "Dawn of Asia", type: 3, level: 14 },
    { value: "dirty_rouge_e", title: "- dirty rouge -", type: 3, level: 14 },
    { value: "double_universe_e", title: "Double Universe", type: 3, level: 14 },
    { value: "electric_sister_bitch_e", title: "ectric \"Sister\" Bitch", type: 3, level: 14 },
    { value: "engraved_mark_e", title: "Engraved Mark", type: 3, level: 14 },
    { value: "fairy_dancing_in_lake_e", title: "#Fairy_dancing_in_lake", type: 3, level: 14 },
    { value: "frantic_wolf_e", title: "Frantic Wolf", type: 3, level: 14 },
    { value: "gerol_e", title: "GEROL", type: 3, level: 14 },
    { value: "goodbyebye_planet_e", title: "Goodbye-bye Planet", type: 3, level: 14 },
    { value: "hoshizora_illumination_e", title: "Hoshizora Illumination", type: 3, level: 14 },
    { value: "im_so_happy_e", title: "I'm so Happy", type: 3, level: 14 },
    { value: "infinity_overdrive_e", title: "INFINITY OVERDRIVE", type: 3, level: 14 },
    { value: "last_battalion_e", title: "Last Battalion", type: 3, level: 14 },
    { value: "lemond_summer_e", title: "LEMON SUMMER", type: 3, level: 14 },
    { value: "lieselotte_e", title: "Lieselotte", type: 3, level: 14 },
    { value: "littlegamestar_e", title: "LittleGameStar", type: 3, level: 14 },
    { value: "mother_ship_e", title: "Mother Ship (C-YA MIX)", type: 3, level: 14 },
    { value: "next_infection_e", title: "Next infection", type: 3, level: 14 },
    { value: "odds_and_ends_e", title: "odds and ends", type: 3, level: 14 },
    { value: "overdrivers_e", title: "OVERDRIVERS", type: 3, level: 14 },
    { value: "over_the_starlit_sky_e", title: "Over the Starlit sky", type: 3, level: 14 },
    { value: "paradoxy_e", title: "Paradoxy", type: 3, level: 14 },
    { value: "playing_with_fire_e", title: "Playing With Fire", type: 3, level: 14 },
    { value: "profession_e", title: "Profession", type: 3, level: 14 },
    { value: "punisher_e", title: "PUNISHER", type: 3, level: 14 },
    { value: "reverse_limited_e", title: "REVERSE LIMITED!(SDVX Edit)", type: 3, level: 14 },
    { value: "rings_of_rainbow_e", title: "Rings of Rainbow", type: 3, level: 14 },
    { value: "sakura_reflection_plight_e", title: "Sakura Reflection (P*Light Slayer Remix)", type: 3, level: 14 },
    { value: "scapegoat_boy_e", title: "SCAPEGOAT BOY - SDVX Edit. -", type: 3, level: 14 },
    { value: "she_is_my_wife_e", title: "She is my wife すーぱーアイドル☆ミツル子Remixちゃん", type: 3, level: 14 },
    { value: "squeeze_e", title: "Squeeze", type: 3, level: 14 },
    { value: "stella_sinistra_e", title: "Stella Sinistra", type: 3, level: 14 },
    { value: "take_a_step_forward_e", title: "take a step forward", type: 3, level: 14 },
    { value: "tomato_leaf_breaks_e", title: "Tomato Leaf Breaks", type: 3, level: 14 },
    { value: "unicorn_tail_e", title: "Unicorn tail Dustboxxxx RMX", type: 3, level: 14 },
    { value: "venona_e", title: "Venona", type: 3, level: 14 },
    { value: "versus_e", title: "VERSUS!!", type: 3, level: 14 },
    { value: "vindicator_e", title: "Vindicator", type: 3, level: 14 },
    { value: "virtual_sunrise_e", title: "Virtual Sunrise", type: 3, level: 14 },
    { value: "voice2voice_e", title: "Voice 2 Voice", type: 3, level: 14 },
    { value: "wave_e", title: "WAVE", type: 3, level: 14 },
    { value: "we_are_the_scarlet_e", title: "We Are The Scarlet (SDVX Edit)", type: 3, level: 14 },
    { value: "anohanasakuya_e", title: "アノ華咲クヤ", type: 3, level: 14 },
    { value: "arusutoromeria_e", title: "アルストロメリア KURO-HACO Remix", type: 3, level: 14 },
    { value: "usatei_e", title: "ウサテイ", type: 3, level: 14 },
    { value: "ubaware_e", title: "ウバワレ", type: 3, level: 14 },
    { value: "oowarerayorokobisanubeshiomoyo_e", title: "おお われら喜び讃うべし、主よ", type: 3, level: 14 },
    { value: "kunoichidemokoigasitai_e", title: "クノイチでも恋がしたい", type: 3, level: 14 },
    { value: "gekiokosutikkufainariaritipunpunmasuta_supa_ku_e", title: "げきオコスティックファイナリアリティぷんぷんマスタースパーク", type: 3, level: 14 },
    { value: "kochirakoufukuanshiniinkaidesu_e", title: "こちら、幸福安心委員会です。", type: 3, level: 14 },
    { value: "tsubuyakimahoushoujorimuru_e", title: "つぶやき魔法少女りむる", type: 3, level: 14 },
    { value: "deddoboworudehoumuran_e", title: "デッドボヲルdeホームラン", type: 3, level: 14 },
    { value: "torauisukarupanteku_tori_e", title: "トラウィスカルパンテクートリ", type: 3, level: 14 },
    { value: "masemateikkumamamajikku_e", title: "ませまてぃっく♥ま+ま=まじっく！", type: 3, level: 14 },
    { value: "momongamonbanbantsu_e", title: "モモンが門番ばんっ☆", type: 3, level: 14 },
    { value: "yabaitsuyokuteatamaiiatainouta_e", title: "やばいつよくてあたまいいあたいのうた", type: 3, level: 14 },
    { value: "yuusyanonatsuyasumi_e", title: "ゆうしゃのなつやすみ", type: 3, level: 14 },
    { value: "wavurumahoutoshokan_e", title: "ワヴル魔法図書館", type: 3, level: 14 },
    { value: "aikurusifu_ru_e", title: "愛くるしフール -Not EASY!!-", type: 3, level: 14 },
    { value: "akayoriakaiyumeaya2gtechdanceremix_e", title: "赤より紅い夢-Aya2g Tech Dance Remix-", type: 3, level: 14 },
    { value: "kamitonarikaregamitakyoukaiisen_e", title: "神となり彼が見た境界線", type: 3, level: 14 },
    { value: "gunjougarasunosupika_e", title: "群青硝子のスピカ", type: 3, level: 14 },
    { value: "koiwadoumorohadouokhouteishiki_e", title: "恋はどう？モロ◎波動OK☆方程式!!", type: 3, level: 14 },
    { value: "shanhaikouchakanchineseteaorchidremix_e", title: "上海紅茶館 ～ Chinese Tea Orchid Remix", type: 3, level: 14 },
    { value: "juuseio_ba_furou_e", title: "獣性オーバーフロウ", type: 3, level: 14 },
    { value: "juumensouhuri_damuver_e", title: "十面相 (フリーダムVer)", type: 3, level: 14 },
    { value: "shounenwasoraotadoruprogpianoremix_e", title: "少年は空を辿る Prog Piano Remix", type: 3, level: 14 },
    { value: "shinshokukoudo666kyouchottoyubiryaku_e", title: "侵蝕コード：666　-今日ちょっと指（略-", type: 3, level: 14 },
    { value: "susumeissungundanrebellionofthedwarfs_e", title: "進め！イッスン軍団 -Rebellion of the Dwarfs-", type: 3, level: 14 },
    { value: "seishunshiterukairedilady_e", title: "青春☆してるかい？READY&LADY!", type: 3, level: 14 },
    { value: "sonezakisinjuu_e", title: "曾根崎心中", type: 3, level: 14 },
    { value: "chousoukaipasshoneitofi_ba__e", title: "超爽快☆パッショネイト・フィーバー", type: 3, level: 14 },
    { value: "nagareboshitokiminouta_e", title: "流れ星と君の歌", type: 3, level: 14 },
    { value: "higurashimoratoriamu_e", title: "茅蜩モラトリアム", type: 3, level: 14 },
    { value: "houkagosutoraido_e", title: "放課後ストライド", type: 3, level: 14 },
    { value: "makyoudatenrokusarieru_e", title: "魔境堕天録サリエル", type: 3, level: 14 },
    { value: "mahoushoujoutachinohyakunensaimastycoreremix_e", title: "魔法少女達の百年祭(masty core remix)", type: 3, level: 14 },
    { value: "yukionna_e", title: "雪女", type: 3, level: 14 },
    { value: "waruitokorogahitotsumonai_e", title: "悪いところがひとつもない！", type: 3, level: 14 },
    { value: "kodokunobannin_e", title: "孤独の番人", type: 3, level: 14 },
    { value: "badapplefeatnomico_i", title: "Bad Apple!! feat.nomico", type: 4, level: 14 },
    { value: "caramel_ribbon_i", title: "caramel ribbon", type: 4, level: 14 },
    { value: "gamboldfkslcrmx_i", title: "GAMBOL(dfk SLC rmx)", type: 4, level: 14 },
    { value: "hallelujah_i", title: "Ha･lle･lu･jah", type: 4, level: 14 },
    { value: "pulse_laser_i", title: "PULSE LASER", type: 4, level: 14 },
    { value: "goriragairundakabochagautattemitaver_i", title: "ごりらがいるんだ ～かぼちゃが歌ってみたver～", type: 4, level: 14 },
    { value: "batafuraikyatto_i", title: "バタフライキャット", type: 4, level: 14 },
    { value: "yasaimashininnnikuaburaoome_i", title: "ヤサイマシ☆ニンニクアブラオオメ", type: 4, level: 14 },
    { value: "koisuruuchuusensoutsuabababamikkusu_i", title: "恋する☆宇宙戦争っ！！ あばばばみっくす", type: 4, level: 14 },
    { value: "tsukinimurakumohananikaze_i", title: "月に叢雲華に風", type: 4, level: 14 },
    { value: "rintoshitesakuhananogotokusupu_kyiterumyinmikkusu_i", title: "凛として咲く花の如く スプーキィテルミィンミックス", type: 4, level: 14 },
    { value: "albida_powerless_mix_e", title: "ALBIDA Powerless Mix", type: 3, level: 14 },
    { value: "blue_rain_dustboxxxx_rmx_e", title: "Blue Rain Dustboxxxx RMX", type: 3, level: 14 },
    { value: "broken_8cmix_e", title: "Broken 8cmix", type: 3, level: 14 },
    { value: "disagree_feelings_e", title: "Disagree Feelings", type: 3, level: 14 },
    { value: "distorted_floor_e", title: "Distorted Floor", type: 3, level: 14 },
    { value: "dreamin_feat_ryu_e", title: "dreamin' feat.Ryu☆", type: 3, level: 14 },
    { value: "earthquake_super_shock_sdvx_edit_e", title: "Earthquake Super Shock - SDVX Edit. -", type: 3, level: 14 },
    { value: "evans_voltex_pf_arrange_e", title: "Evans VolteX Pf arrange", type: 3, level: 14 },
    { value: "freaky_freak_e", title: "freaky freak", type: 3, level: 14 },
    { value: "freeway_shuffle_more2_happy_remix_e", title: "Freeway Shuffle -More2 HAPPY Re-Mix-", type: 3, level: 14 },
    { value: "grip_break_down_sdvx_edit_e", title: "Grip & Break down !! - SDVX Edit. -", type: 3, level: 14 },
    { value: "ignited_night_burst_e", title: "Ignited Night burst", type: 3, level: 14 },
    { value: "mandara_e", title: "MANDARA", type: 3, level: 14 },
    { value: "neu_bsp_style_e", title: "neu BSP style", type: 3, level: 14 },
    { value: "rainbow_flyer_gratitude_remix_e", title: "rainbow flyer -gratitude remix-", type: 3, level: 14 },
    { value: "red_zone_neoclassical_party_remix_e", title: "RED ZONE NeoClassical Party Remix", type: 3, level: 14 },
    { value: "strawberry_crisis_e", title: "Strawberry Crisis", type: 3, level: 14 },
    { value: "taboo_tears_you_up_2008_e", title: "taboo tears you up 2008", type: 3, level: 14 },
    { value: "tomorrow_perfume_cshow_remix_e", title: "Tomorrow Perfume (C-Show Remix)", type: 3, level: 14 },
    { value: "trigger_happy_e", title: "TRIGGER★HAPPY", type: 3, level: 14 },
    { value: "tycoon_e", title: "TYCOON", type: 3, level: 14 },
    { value: "wheel_e", title: "Wheel", type: 3, level: 14 },
    { value: "xepher_light_and_darkness_dragon_remix_e", title: "Xepher Light and Darkness Dragon REMIX", type: 3, level: 14 },
    { value: "adagaeshishindoro_mu_e", title: "仇返しシンドローム", type: 3, level: 14 },
    { value: "amanojaku_e", title: "天ノ弱", type: 3, level: 14 },
    { value: "chorenaiekusutori_muga_ru_e", title: "超恋愛☆エクストリーム･ガール", type: 3, level: 14 },
    { value: "esuke_puhuromudisutopia_e", title: "エスケープ･フロム･ディストピア", type: 3, level: 14 },
    { value: "fushigiomochagangaradindon_e", title: "不思議玩具ガンガラディンドン", type: 3, level: 14 },
    { value: "gensounosateraito_e", title: "幻想のサテライト", type: 3, level: 14 },
    { value: "ikasamaraihugeimu_e", title: "イカサマライフゲイム", type: 3, level: 14 },
    { value: "jinseirisettobotan_e", title: "人生リセットボタン", type: 3, level: 14 },
    { value: "kamisamanejimaki_e", title: "カミサマネジマキ", type: 3, level: 14 },
    { value: "kasyokuseiaidorushoukougun_e", title: "過食性:アイドル症候群", type: 3, level: 14 },
    { value: "ka_nibaru_e", title: "カーニバル", type: 3, level: 14 },
    { value: "keppekishou_e", title: "ケッペキショウ", type: 3, level: 14 },
    { value: "kero9destiny_e", title: "ケロ⑨destiny", type: 3, level: 14 },
    { value: "kiminie_ruwodjutoremix_e", title: "君にエールを・・・！（DJ UTO REMIX）", type: 3, level: 14 },
    { value: "koisuruuchusensouabababamikkusu_e", title: "恋する☆宇宙戦争っ！！ あばばばみっくす", type: 3, level: 14 },
    { value: "kusaregedotocyokorewito_e", title: "腐れ外道とチョコレゐト", type: 3, level: 14 },
    { value: "monosugoiikioideke_negamonosugoiuta_e", title: "物凄い勢いでけーねが物凄いうた", type: 3, level: 14 },
    { value: "naitoobunaitsu_e", title: "ナイト･オブ･ナイツ", type: 3, level: 14 },
    { value: "natsunomeiro_e", title: "ナツノメイロ", type: 3, level: 14 },
    { value: "noiji_raba_souru_e", title: "ノイジーラバーソウル", type: 3, level: 14 },
    { value: "onyanokokinennbi_e", title: "おにゃのこ きねんび", type: 3, level: 14 },
    { value: "rokucyounentoichiyamonogatari_e", title: "六兆年と一夜物語", type: 3, level: 14 },
    { value: "ru_bikkukyu_bu_e", title: "ルービックキューブ", type: 3, level: 14 },
    { value: "setsunatorippu_e", title: "セツナトリップ", type: 3, level: 14 },
    { value: "totsugekigarasunoni_sohimedwattnudenparmx_e", title: "突撃!ガラスのニーソ姫! D.watt nu-denpa RMX", type: 3, level: 14 },
    { value: "zuttosobaniisaseteyone_e", title: "ずっとそばにいさせてよね！", type: 3, level: 14 },
    { value: "black_or_white_e", title: "BLACK or WHITE?", type: 3, level: 15 },
    { value: "hyena_e", title: "HYENA", type: 3, level: 15 },
    { value: "aa_e", title: "AA BlackY mix", type: 3, level: 15 },
    { value: "absurd_gaff_e", title: "Absurd Gaff", type: 3, level: 15 },
    { value: "croix_e", title: "croiX", type: 3, level: 15 },
    { value: "dynasty_e", title: "Dynasty", type: 3, level: 15 },
    { value: "flower_e", title: "FLOWER REDALiCE Remix", type: 3, level: 15 },
    { value: "ganymede_e", title: "Ganymede kamome mix", type: 3, level: 15 },
    { value: "gott_e", title: "Gott", type: 3, level: 15 },
    { value: "max_burning_e", title: "Max Burning!!", type: 3, level: 15 },
    { value: "onigo_e", title: "Onigo", type: 3, level: 15 },
    { value: "panic_holic_e", title: "PANIC HOLIC", type: 3, level: 15 },
    { value: "the_world_of_sound_e", title: "The world of sound", type: 3, level: 15 },
    { value: "vip_e", title: "V.I.P.", type: 3, level: 15 },
    { value: "kanashibarinoaiwo_e", title: "金縛りの逢を", type: 3, level: 15 },
    { value: "daiuchuustage_e", title: "大宇宙ステージ", type: 3, level: 15 },
    { value: "hongkongkungfudaisenpu_e", title: "香港功夫大旋風", type: 3, level: 15 },
    { value: "mei_e", title: "冥 Rockin' SWING REMIX", type: 3, level: 15 },
    { value: "aa_i", title: "AA BlackY mix", type: 4, level: 15 },
    { value: "albida_powerless_mix_i", title: "ALBIDA Powerless Mix", type: 4, level: 15 },
    { value: "distorted_floor_i", title: "Distorted Floor", type: 4, level: 15 },
    { value: "flower_i", title: "FLOWER REDALiCE Remix", type: 4, level: 15 },
    { value: "ganymede_i", title: "Ganymede kamome mix", type: 4, level: 15 },
    { value: "good_high_school_i", title: "good high school", type: 4, level: 15 },
    { value: "nyan_cat_i", title: "Nyan Cat", type: 4, level: 15 },
    { value: "tycoon_i", title: "TYCOON", type: 4, level: 15 },
    { value: "chirunonopa_fekutosansuukyoushitsu_i", title: "チルノのパーフェクトさんすう教室", type: 4, level: 15 },
    { value: "naito_obu_naitsu_i", title: "ナイト・オブ・ナイツ", type: 4, level: 15 },
    { value: "amanojaku_i", title: "天ノ弱", type: 4, level: 15 },
    { value: "kashokuseiaidorushoukougun_i", title: "過食性:アイドル症候群", type: 4, level: 15 },
    { value: "kanbudetomattesugutokerukyoukinoudongein_i", title: "患部で止まってすぐ溶ける ～ 狂気の優曇華院", type: 4, level: 15 },
    { value: "geppuumadenryuukotsukisen_i", title: "「月風魔伝」龍骨鬼戦 yks Remix", type: 4, level: 15 },
    { value: "nishinipporinoodori_i", title: "西日暮里の踊り", type: 4, level: 15 },
    { value: "mei_i", title: "冥 Rockin' SWING REMIX", type: 4, level: 15 },
    { value: "babel_next_story_e", title: "BabeL ～Next Story～", type: 3, level: 15 },
    { value: "black_emperor_e", title: "Black Emperor", type: 3, level: 15 },
    { value: "booths_of_fighters_e", title: "Booths of Fighters", type: 3, level: 15 },
    { value: "brain_power_e", title: "Brain Power", type: 3, level: 15 },
    { value: "c18h27no3_e", title: "C18H27NO3", type: 3, level: 15 },
    { value: "choux_a_la_creme_e", title: "choux a la creme", type: 3, level: 15 },
    { value: "crack_traxxxx_e", title: "Crack Traxxxx", type: 3, level: 15 },
    { value: "deadlock_xxx_e", title: "DEADLOCK XXX", type: 3, level: 15 },
    { value: "decretum_e", title: "Decretum", type: 3, level: 15 },
    { value: "dignity_e", title: "Dignity", type: 3, level: 15 },
    { value: "fairyjoke_sdvx_edit_e", title: "#FairyJoke #SDVX_Edit", type: 3, level: 15 },
    { value: "fiat_lux_e", title: "Fiat Lux", type: 3, level: 15 },
    { value: "flying_out_to_the_sky_e", title: "FLYING OUT TO THE SKY", type: 3, level: 15 },
    { value: "haelequin_e", title: "HAELEQUIN", type: 3, level: 15 },
    { value: "harpuia_e", title: "Harpuia", type: 3, level: 15 },
    { value: "hellfire_e", title: "Hellfire", type: 3, level: 15 },
    { value: "idola_e", title: "Idola", type: 3, level: 15 },
    { value: "innocent_tempest_e", title: "Innocent Tempest", type: 3, level: 15 },
    { value: "ix_e", title: "IX", type: 3, level: 15 },
    { value: "joyeuse_e", title: "Joyeuse", type: 3, level: 15 },
    { value: "killer_mermaid_e", title: "KiLLeR MeRMaiD", type: 3, level: 15 },
    { value: "last_concerto_e", title: "Last Concerto", type: 3, level: 15 },
    { value: "lunartic_dial_e", title: "Lunartic Dial", type: 3, level: 15 },
    { value: "mist_in_hell_e", title: "Mist In Hell", type: 3, level: 15 },
    { value: "pure_evil_e", title: "Pure Evil", type: 3, level: 15 },
    { value: "qubism_e", title: "Qubism", type: 3, level: 15 },
    { value: "quietus_ray_e", title: "Quietus Ray", type: 3, level: 15 },
    { value: "sakura_mirage_e", title: "Sakura Mirage", type: 3, level: 15 },
    { value: "snow_storm_euphoria_e", title: "snow storm -euphoria-", type: 3, level: 15 },
    { value: "starlight_express_e", title: "Starlight Express", type: 3, level: 15 },
    { value: "true_blue_e", title: "True Blue", type: 3, level: 15 },
    { value: "uno_enwakanojonanoka_haru_naba_remix_e", title: "U.N.オーエンは彼女なのか？haru_naba Remix", type: 3, level: 15 },
    { value: "uno_enwakanojonanoka_to_holic_mix_e", title: "U.N.オーエンは彼女なのか？(TO-HOlic mix)", type: 3, level: 15 },
    { value: "vallis_neria_e", title: "VALLIS-NERIA", type: 3, level: 15 },
    { value: "verse_iv_e", title: "Verse IV", type: 3, level: 15 },
    { value: "xross_infection_e", title: "XROSS INFECTION", type: 3, level: 15 },
    { value: "igomoyosuomurunote_maniyorubuyobuyosuketchinokokoromi_e", title: "イゴモヨス=オムルのテーマによるブヨブヨ・スケッチの試み", type: 3, level: 15 },
    { value: "konbeasokudomaxshaininkaitenzushisushipeace_e", title: "コンベア速度Max!? しゃいにん☆廻転ズシ\"Sushi&Peace\"", type: 3, level: 15 },
    { value: "desutoroima_chi_e", title: "デストロイマーチ", type: 3, level: 15 },
    { value: "bannbu_so_doga_ru_e", title: "バンブーソード・ガール", type: 3, level: 15 },
    { value: "borutetaisoudaiichi_e", title: "ボルテ体操第一", type: 3, level: 15 },
    { value: "mu_nyapoyopoyosuppokonya_go_e", title: "ムーニャポヨポヨスッポコニャーゴ", type: 3, level: 15 },
    { value: "rakugakisuto_e", title: "ラクガキスト", type: 3, level: 15 },
    { value: "akuseiroryitamakyaverizumu_e", title: "悪性ロリィタマキャヴェリズム", type: 3, level: 15 },
    { value: "ongaku_resolve_e", title: "音楽 -resolve-", type: 3, level: 15 },
    { value: "ongaku_kaiongaku_mix_e", title: "音楽 -壊音楽 mix-", type: 3, level: 15 },
    { value: "saishuukichikuimoutofurando_rus_e", title: "最終鬼畜妹フランドール・S", type: 3, level: 15 },
    { value: "shoujoboudou_e", title: "少女暴動", type: 3, level: 15 },
    { value: "shinkouhahakanakiningennotameni_arr_demetori_e", title: "信仰は儚き人間の為に ～ Arr.Demetori", type: 3, level: 15 },
    { value: "chouetsushiteshimattakanojotosowoumiotoshitariyuu_e", title: "超越してしまった彼女と其を生み落した理由", type: 3, level: 15 },
    { value: "todoroke_koinobeanball_e", title: "轟け！恋のビーンボール！！", type: 3, level: 15 },
    { value: "yanaginoshitanodyurahan_hard_chaos_mix_e", title: "柳の下のデュラハン hard chaos mix", type: 3, level: 15 },
    { value: "bangin_burst_e", title: "Bangin' Burst", type: 3, level: 16 },
    { value: "for_ultraplayers_e", title: "For UltraPlayers", type: 3, level: 16 },
    { value: "cleopatrysm_e", title: "Cleopatrysm", type: 3, level: 14 },
    { value: "cleopatrysm_i", title: "Cleopatrysm", type: 4, level: 15 },
    { value: "osenjumedite_shon_e", title: "御千手メディテーション", type: 3, level: 14 },
    { value: "osenjumedite_shon_i", title: "御千手メディテーション", type: 4, level: 15 }
]);

var music_test_db = TAFFY([
    { value: "cleopatrysm_n", title: "Cleopatrysm", type: 1, level: 6 },
    { value: "cleopatrysm_a", title: "Cleopatrysm", type: 2, level: 12 },
    { value: "osenjumedite_shon_n", title: "御千手メディテーション", type: 1, level: 6 },
    { value: "osenjumedite_shon_a", title: "御千手メディテーション", type: 2, level: 12 },
    { value: "khamen_break_n", title: "KHAMEN BREAK", type: 1, level: 5 },
    { value: "khamen_break_a", title: "KHAMEN BREAK", type: 2, level: 11 },
    { value: "khamen_break_e", title: "KHAMEN BREAK", type: 3, level: 15 },
    { value: "khamen_break_i", title: "KHAMEN BREAK", type: 4, level: 14 },
    { value: "insecticide_n", title: "INSECTICIDE", type: 1, level: 6 },
    { value: "insecticide_a", title: "INSECTICIDE", type: 2, level: 12 },
    { value: "insecticide_e", title: "INSECTICIDE", type: 3, level: 15 },
    { value: "fire_fire_dark_blaze_remix_n", title: "FIRE FIRE -DARK BLAZE REMIX-", type: 1, level: 6 },
    { value: "fire_fire_dark_blaze_remix_a", title: "FIRE FIRE -DARK BLAZE REMIX-", type: 2, level: 12 },
    { value: "fire_fire_dark_blaze_remix_e", title: "FIRE FIRE -DARK BLAZE REMIX-", type: 3, level: 15 },
    { value: "gigadelic_stance_xxxx_n", title: "gigadelic -stance xxxx-", type: 1, level: 5 },
    { value: "gigadelic_stance_xxxx_a", title: "gigadelic -stance xxxx-", type: 2, level: 11 },
    { value: "gigadelic_stance_xxxx_e", title: "gigadelic -stance xxxx-", type: 3, level: 15 },
    { value: "monkey_business_lapix_remix_n", title: "Monkey Business (lapix Remix)", type: 1, level: 5 },
    { value: "monkey_business_lapix_remix_a", title: "Monkey Business (lapix Remix)", type: 2, level: 10 },
    { value: "monkey_business_lapix_remix_e", title: "Monkey Business (lapix Remix)", type: 3, level: 14 },
    { value: "the_wind_of_gold_folkcore_remix_n", title: "The Wind of Gold (folkcore remix)", type: 1, level: 4 },
    { value: "the_wind_of_gold_folkcore_remix_a", title: "The Wind of Gold (folkcore remix)", type: 2, level: 9 },
    { value: "the_wind_of_gold_folkcore_remix_e", title: "The Wind of Gold (folkcore remix)", type: 3, level: 13 },
    { value: "wuv_u_more2_happy_remix_special_n", title: "Wuv U -More2 HAPPY Re-Mix Special-", type: 1, level: 5 },
    { value: "wuv_u_more2_happy_remix_special_a", title: "Wuv U -More2 HAPPY Re-Mix Special-", type: 2, level: 10 },
    { value: "wuv_u_more2_happy_remix_special_e", title: "Wuv U -More2 HAPPY Re-Mix Special-", type: 3, level: 14 },
    { value: "komikarunamisyagujitorajie_syon_punk_it_ver_n", title: "コミカルなミシャグジとラジエーション(PUNK IT ver.)", type: 1, level: 4 },
    { value: "komikarunamisyagujitorajie_syon_punk_it_ver_a", title: "コミカルなミシャグジとラジエーション(PUNK IT ver.)", type: 2, level: 10 },
    { value: "komikarunamisyagujitorajie_syon_punk_it_ver_e", title: "コミカルなミシャグジとラジエーション(PUNK IT ver.)", type: 3, level: 14 },
    { value: "saihatenokotoba_n", title: "最果てのコトバ", type: 1, level: 2 },
    { value: "saihatenokotoba_a", title: "最果てのコトバ", type: 2, level: 8 },
    { value: "saihatenokotoba_e", title: "最果てのコトバ", type: 3, level: 12 },
    { value: "sweet_dream_n", title: "sweet dream", type: 1, level: 2 },
    { value: "sweet_dream_a", title: "sweet dream", type: 2, level: 9 },
    { value: "sweet_dream_e", title: "sweet dream", type: 3, level: 13 },
    { value: "shutoaonoranpe_ji_n", title: "朱と碧のランページ", type: 1, level: 5 },
    { value: "shutoaonoranpe_ji_a", title: "朱と碧のランページ", type: 2, level: 12 },
    { value: "shutoaonoranpe_ji_e", title: "朱と碧のランページ", type: 3, level: 15 },
    { value: "bokuwakuukigayomenai_n", title: "僕は空気が嫁ない", type: 1, level: 4 },
    { value: "bokuwakuukigayomenai_a", title: "僕は空気が嫁ない", type: 2, level: 10 },
    { value: "bokuwakuukigayomenai_e", title: "僕は空気が嫁ない", type: 3, level: 14 },
    { value: "nakimushirobo_n", title: "ナキムシロボ", type: 1, level: 3 },
    { value: "nakimushirobo_a", title: "ナキムシロボ", type: 2, level: 10 },
    { value: "nakimushirobo_e", title: "ナキムシロボ", type: 3, level: 13 },
    { value: "shiroiyukinopurinsesuwa_n", title: "白い雪のプリンセスは", type: 1, level: 5 },
    { value: "shiroiyukinopurinsesuwa_a", title: "白い雪のプリンセスは", type: 2, level: 10 },
    { value: "shiroiyukinopurinsesuwa_e", title: "白い雪のプリンセスは", type: 3, level: 14 },
    { value: "uchoutenbiba_che_n", title: "有頂天ビバーチェ", type: 1, level: 6 },
    { value: "uchoutenbiba_che_a", title: "有頂天ビバーチェ", type: 2, level: 11 },
    { value: "uchoutenbiba_che_e", title: "有頂天ビバーチェ", type: 3, level: 15 },
    { value: "hawawanatenkai_n", title: "はわわｗ！な展開っ！", type: 1, level: 4 },
    { value: "hawawanatenkai_a", title: "はわわｗ！な展開っ！", type: 2, level: 11 },
    { value: "hawawanatenkai_e", title: "はわわｗ！な展開っ！", type: 3, level: 14 },
    { value: "code_crimson_n", title: "CODE -CRiMSON-", type: 1, level: 6 },
    { value: "code_crimson_a", title: "CODE -CRiMSON-", type: 2, level: 12 },
    { value: "code_crimson_e", title: "CODE -CRiMSON-", type: 3, level: 15 },
    { value: "growth_memories_n", title: "Growth Memories", type: 1, level: 6 },
    { value: "growth_memories_a", title: "Growth Memories", type: 2, level: 12 },
    { value: "growth_memories_e", title: "Growth Memories", type: 3, level: 15 },
    { value: "wish_upon_twin_stars_n", title: "Wish upon Twin Stars", type: 1, level: 5 },
    { value: "wish_upon_twin_stars_a", title: "Wish upon Twin Stars", type: 2, level: 11 },
    { value: "wish_upon_twin_stars_e", title: "Wish upon Twin Stars", type: 3, level: 15 },
    { value: "applique_n", title: "Appliqu齷", type: 1, level: 5 },
    { value: "applique_a", title: "Appliqu齷", type: 2, level: 11 },
    { value: "applique_e", title: "Appliqu齷", type: 3, level: 14 },
    { value: "dadadadadadadadadada_n", title: "打打打打打打打打打打", type: 1, level: 6 },
    { value: "dadadadadadadadadada_a", title: "打打打打打打打打打打", type: 2, level: 11 },
    { value: "dadadadadadadadadada_e", title: "打打打打打打打打打打", type: 3, level: 14 },
    { value: "dadadadadadadadadada_i", title: "打打打打打打打打打打", type: 4, level: 15 },
    { value: "hautou_sekaiseifuku_n", title: "ハウトゥー世界征服", type: 1, level: 3 },
    { value: "hautou_sekaiseifuku_a", title: "ハウトゥー世界征服", type: 2, level: 9 },
    { value: "hautou_sekaiseifuku_e", title: "ハウトゥー世界征服", type: 3, level: 13 },
    { value: "shindeshimautowanasakenai_n", title: "しんでしまうとはなさけない！", type: 1, level: 5 },
    { value: "shindeshimautowanasakenai_a", title: "しんでしまうとはなさけない！", type: 2, level: 11 },
    { value: "shindeshimautowanasakenai_e", title: "しんでしまうとはなさけない！", type: 3, level: 14 },
    { value: "scene_jimi_samup_n", title: "Scene", type: 1, level: 4 },
    { value: "scene_jimi_samup_a", title: "Scene", type: 2, level: 10 },
    { value: "scene_jimi_samup_e", title: "Scene", type: 3, level: 13 },
    { value: "croix_i", title: "croiX", type: 4, level: 15 },
    { value: "dynasty_i", title: "Dynasty", type: 4, level: 15 },
    { value: "gott_i", title: "Gott", type: 4, level: 15 },
    { value: "max_burning_i", title: "Max Burning!!", type: 4, level: 16 }
]);

// Initial music_db
function initialMusicDBDOM() {
    var current_optgroup;
    current_optgroup = $("#music");
    current_optgroup.append("<option value=\"\">Now Playing</option>");
    for (var level = 1; level <= 16; ++level) {
        var db_result = music_db({ level: level }).order("type asec, title asec");
        // var db_result = music_db({ level: level });
        if (db_result.count() != 0) {
            $("#music").append("<optgroup label=\"lv" + level + "\"></optgroup>");
            current_optgroup = $("#music optgroup:last-child");
            db_result.each(function (entry) {
                var type_name = "";
                if (entry.type == 1)
                    type_name = "NOV";
                else if (entry.type == 2)
                    type_name = "ADV";
                else if (entry.type == 3)
                    type_name = "EXH";
                else if (entry.type == 4)
                    type_name = "INF";
                current_optgroup.append("<option value=\"" + entry.value + "\">" + entry.title + "[" + type_name + "]</option>");
            });
        }
    }

    // Append test songs
    var db_test_result = music_test_db();
    if (db_test_result.count() != 0) {
        $("#music").append("<optgroup label=\"Offset not setting songs.\"></optgroup>");
        current_optgroup = $("#music optgroup:last-child");
        db_test_result.each(function (entry) {
            var type_name = "";
            if (entry.type == 1)
                type_name = "NOV";
            else if (entry.type == 2)
                type_name = "ADV";
            else if (entry.type == 3)
                type_name = "EXH";
            else if (entry.type == 4)
                type_name = "INF";
            current_optgroup.append("<option value=\"" + entry.value + "\">" + entry.title + "[" + type_name + "]</option>");
        });
    }
}