from app.models import db, Article

def seed_articles():
    a1 = Article(
        user_id=1,
        title="Inside the Library That Holds the World’s Rarest Colors",
        author="Abigail Cain",
        source="atsy.net",
        description="This detailed history of the Forbes Pigment Collection at Harvard traces from the archive's inception in 1910 to its current research. With the over 2,500 specimens, scientists, historians, and curators use the collection to better understand the materials used to make art.",
        quote="Historic it may be, but the Forbes Collection deals as much with the future of artworks as the past. It could almost be described as a conservator’s crystal ball: offering glimpses into the aging process for various pigments, binders, and any other materials that might make their way into a work of art.",
        image_url="https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FxXNUGxecMHnoC5PXKlaxGQ%252F20170913-artsy-harvard-pigment-0030.jpg&width=2000&quality=80",
        link_url="https://www.artsy.net/article/artsy-editorial-inside-library-holds-worlds-rarest-colors",
    )
    a2 = Article(
        user_id=1,
        title="Red-Green & Blue-Yellow: The Stunning Colors You Can't See",
        author="Natalie Wolchover",
        source="livescience.com",
        description="With specific stimulus, we can see a mixture of blue and yellow not just as green, the combination of the two, but as new colors that are distinctly both blue and yellow at the same time.",
        quote="Red-green and yellow-blue are the so-called \"forbidden colors.\" Composed of pairs of hues whose light frequencies automatically cancel each other out in the human eye, they're supposed to be impossible to see simultaneously... Scientists are finding out that these colors can be seen — you just need to know how to look for them.",
        image_url="https://cdn.mos.cms.futurecdn.net/dRDNSeqer3ciNjYEUtpAu8-1024-80.jpg.webp",
        link_url="https://www.livescience.com/17948-red-green-blue-yellow-stunning-colors.html",
    )
    a3 = Article(
        user_id=1,
        title="The Reality of Color Is Perception",
        author="Mazviita Chirimutta",
        source="nautil.us",
        description="Philosophers and scientists have long debated the essence of colors, which straddle the truth of the physical world and the subjectivity of an individual's visual perception. Here, a linguistic middle ground is proposed that embraces that dual nature.",
        quote="...colors are ways that stimuli appear to certain kinds of individuals, and at the same time, ways that individuals perceive certain kinds of stimuli. The “adverbialism” comes in because colors are said to be properties of processes rather than things. So instead of treating color words as adjectives (which describe things), we should treat them as adverbs (which describe activities). I eat hurriedly, walk gracelessly, and on a fine day I see the sky bluely!",
        image_url="http://static.nautil.us/6748_dde16b86c64390f0af01275a44d3a42d.jpg",
        link_url="https://nautil.us/issue/56/perspective/the-reality-of-color-is-perception-rp",
    )
    a4 = Article(
        user_id=1,
        title="Pompeii Shows its True Colours",
        author="Charlotte Higgins",
        source="theguradian.com",
        description="The 18th century rediscovery of Pompeii and Herculaneum brought the cities' trademark hue into favor. Now academics try to sort out which reds were from valuable lead minium, which from an imitation colorant, and which are discolorations from the eruptions.",
        quote="According to new research presented to Sapienza University in Rome last week, large swaths of the vivid \"Pompeiian red\" frescoes in the town actually began life as yellow – and were turned red by the gases emitted from Vesuvius as it erupted in AD 79.",
        image_url="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2011/9/22/1316711688754/pompeii-red-yellow-007.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=22906a2b66d9af331269ff54f382e184",
        link_url="https://www.theguardian.com/science/2011/sep/22/pompeii-red-yellow",
    )
    a5 = Article(
        user_id=1,
        title="What pigments are in fruit and flowers?",
        author="Causes of Color",
        source="webexhibits.com",
        description="A quick overview of the biological pigments of plants: chlorophylls, carotenoids, flavonoids, and betalains.",
        quote="Pigments are responsible for many of the beautiful colors we see in the plant world. Dyes have often been made from both animal sources and plant extracts . Some of the pigments found in animals have also recently been found in plants.",
        image_url="https://images.unsplash.com/photo-1498579397066-22750a3cb424",
        link_url="http://www.webexhibits.org/causesofcolor/7H.html",
    )
    a6 = Article(
        user_id=1,
        title="Color Feel: Citron Yellow",
        author="Margaret Penney",
        source="sessions.edu",
        description="See citron yellow, and suggested pairings, in action across design and art disciplines, including interior design, print media, and fashion.",
        quote="Citron yellow is a fantastically bright yellow with a hint of green, like the color of the citron fruit. Citron is similar to chartreuse as a favorite in fashion and home decor for its modern intensity — yet citron is less green and more summery and natural.",
        image_url="https://www.sessions.edu/wp-content/uploads/56dc114facd8ff21dc98c0fe2efdaa0f.jpg",
        link_url="https://www.bbc.com/culture/article/20180227-the-toxic-colour-that-comes-from-volcanoes",
    )
    a7 = Article(
        user_id=1,
        title="How Animals Hacked The Rainbow And Got Stumped On Blue",
        author="Rae Ellen Bichell",
        source="npr.org",
        description="Animals like the blue morpho butterfly and peacocks use structural colors (how cells are are arranged to filter and bounce light) to create their vibrant blues.",
        quote="In fact, of all Earth's inhabitants with backbones, not one is known to harbor blue pigment. Even some of the most brilliantly blue things in nature — a peacock feather, or a blue eye, for example — don't contain a single speck of blue pigment. So, how can they look so blue?",
        image_url="https://media.npr.org/assets/img/2014/10/24/colors-2-_custom-afc93498ec5df91f516ee25aa3141c750524cd16-s1600-c85.webp",
        link_url="https://www.npr.org/sections/health-shots/2014/11/12/347736896/how-animals-hacked-the-rainbow-and-got-stumped-on-blue",
    )
    a8 = Article(
        user_id=1,
        title="The Colorful Stories of 5 Obsolete Art Pigments",
        author="Allison Meier",
        source="hyperallergic.com",
        description="A look at a handful of pigments that have fallen out of fashion, including mayan blue, tyrian purple, white lead, lapis lazuli, dragon's blue, mummy brown, Indian yellow, and Scheele's green",
        quote="The colors of art change not just with trends, but availability as well. For reasons of being incredibly poisonous, expensive, or just involving way too many snails, here are five pigments that have disappeared from art.",
        image_url="https://hyperallergic.com/wp-content/uploads/2013/07/mayabluemural.jpg",
        link_url="https://hyperallergic.com/74661/the-colorful-stories-of-5-obsolete-art-pigments/",
    )
    a9 = Article(
        user_id=1,
        title="Reinventing the Wheel: Why Red is Not a Primary Color",
        author="John Muir Laws",
        source="johnmuirlaws.com",
        description="If red, yellow, and blue can be used to mix every other color, why do our paintings turn out so muddy? Color mixing experiments and art supply shopping advice for those looking to create clean, saturated paint mixes.",
        quote="What then are the primary colors? Your color printer knows the answer: cyan, yellow and magenta. These colors mix a bright and clean spectrum. You can mix red, green and blue from these primaries. Orange and violet still occupy their familiar locations in between magenta and yellow and blue and magenta respectively.",
        image_url="https://www.johnmuirlaws.com/wp-content/uploads/2011/08/cmy-color-wheel_1-300x295.jpg",
        link_url="https://johnmuirlaws.com/color-theory/",
    )
    a10 = Article(
        user_id=1,
        title="The Hidden Histories of Five Extraordinary Colours",
        author="Patrick Baty",
        source="thamesandhudson.com",
        description="Building on the color samples and evocative source descriptions in \"Werner's Nomenclature\", nature's colors are catalogued with illustrations and additonal information.",
        quote="From Gamboge Yellow to Orpiment Orange, how does a colour get its name? Here, \"Nature’s Palette\" author Patrick Baty shares the stories behind five remarkable colours celebrated in the book – including one to be found on the ‘Neck Ruff of the Golden Pheasant’ and the ‘Belly of the Warty Newt’.",
        image_url="https://admin.thamesandhudson.com/app/uploads/2021/04/Natures-Paletta-Article-spread_2.jpg",
        link_url="https://thamesandhudson.com/news/the-hidden-histories-of-five-extraordinary-colours/",
    )
    a11 = Article(
        user_id=1,
        title="Using Sight to Determine Degree of Roast",
        author="Thompson Owen",
        source="sweetmarias.com",
        description="The coffee rainbow - from green unroasted coffee to \"imminent fire\" carbonized beans, and every shade in between!",
        quote="When complemented by the audible cues (first and second crack) and the aromas of the roast process, color can be extremely informative.",
        image_url="https://library.sweetmarias.com/wp-content/uploads/2010/03/download.jpg",
        link_url="https://library.sweetmarias.com/using-sight-to-determine-degree-of-roast/",
    )
    a12 = Article(
        user_id=1,
        title="A New Study About Color Tries to Decode ‘The Brain’s Pantone’",
        author="Sara Harrison",
        source="wired.com",
        description="In search of the one true color space, an artist/neuroscientist is building a map based on neural activity patterns in response to colors rather than on biology and the electromagnetic spectrum.",
        quote=" In a recent paper published in Current Biology, Conway was able to show that each color elicits a unique pattern of neural activity. In this study, he focused first on the brain’s response to a color, rather than on the color each of his study subjects verbally described. This approach reframes how neuroscientists typically try to answer questions about color perception.",
        image_url="https://media.wired.com/photos/5fbc12c088b1084ad997655e/master/w_2240,c_limit/Science_colorprocessing_1168629863.jpg",
        link_url="https://www.wired.com/story/a-new-study-about-color-tries-to-decode-the-brains-pantone/",
    )
    a13 = Article(
        user_id=1,
        title="The toxic colour that comes from volcanoes",
        author="Kelly Grovier",
        source="bbc.com",
        description="With orpiment as a starting place, orange's use throughout art history is discussed, touching on Gauguin, Matisse, Christo & Jeanne-Claude, Munch, and Leighton.",
        quote="Convinced that the luminous shimmer of orpiment (its name is a contraction of Latin aurum, meaning ‘gold’, and pigmentum meaning ‘colour’) must be a key ingredient in concocting the Philosopher’s Stone, alchemists for centuries risked exposure to the noxious substance. So did artists. To dabble in the occult of orange was to flirt with mortality and immortality in equal measure.",
        image_url="https://ychef.files.bbci.co.uk/1600x900/p06049kf.webp",
        link_url="https://www.bbc.com/culture/article/20180227-the-toxic-colour-that-comes-from-volcanoes",
    )
    a14 = Article(
        user_id=1,
        title="The Physics Hypertextbook: Color",
        author="Glenn Elert",
        source="physics.info",
        description="A sprawling intro to the physics of color: wavelengths and frequencies, how our eyes work, the language we use, color spaces, additive and subtractive models, and more.",
        quote="Objects don't have a color, they give off light that appears to be a color. Spectral power distributions exist in the physical world, but color exists only in the mind of the beholder. Our perception of color is not an objective measure of anything about the light that enters our eyes, but it correlates pretty well with objective reality.",
        image_url="https://physics.info/color/cones.svg",
        link_url="https://physics.info/color/",
    )
    a15 = Article(
        user_id=1,
        title="A Matter of Contrasts",
        author="Theresa-Marie Rhyne",
        source="medium.com/nightingale",
        description="A data visualization consultant shares how to use high-contrast complementary color schemes without producing unpleasant vibrations.",
        quote="In creating data visualizations, the concept of \"vibrating boundaries\" is an important fundamental to remember. The color scheme of your data visualization might pass color deficiency tests but can become too difficult for people with normal color vision to view for an extended period of time.",
        image_url="https://miro.medium.com/max/1000/1*Iwm4EC-2ZflzmKkc5g75PA.png",
        link_url="https://medium.com/nightingale/a-matter-of-contrasts-7288d1dae05e",
    )
    a16 = Article(
        user_id=1,
        title="Announcing the Pantone Color of the Year 2021",
        author="Pantone Color Institute",
        source="pantone.com",
        description="Pantone has published their anticipated Color of the Year. Two actually! The pair of colors--a cheery yellow and a sturdy gray--are said to reflect our quest for resilience and vitality as we overcome this time of uncertainty.",
        quote="Emboldening the spirit, the pairing of PANTONE 17-5104 Ultimate Gray + PANTONE 13-0647 highlights our innate need to be seen, to be visible, to be recognized, to have our voices heard.",
        image_url="https://www.pantone.com/media/catalog/product/f/h/fhiprp-color-of-the-year-2021-ultimate-gray-illuminating.jpg",
        link_url="https://www.pantone.com/color-of-the-year-2021",
    )

    all_articles = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16]
    for article in all_articles:
        db.session.add(article)
    db.session.commit()


# TRUNCATE removes all data from table
# RESET IDENTITY resets auto-incrementing primary key
# CASCADE deletes any dependent entities
def undo_articles():
    db.session.execute('TRUNCATE articles RESTART IDENTITY CASCADE;')
    db.session.commit()
