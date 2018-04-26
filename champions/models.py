from django.db import models

class Lane(models.Model):
    name = models.CharField(max_length=7)

    def __str__(self):
        return self.name


class Champion(models.Model):
    name = models.CharField(max_length=50)
    lane = models.ManyToManyField(Lane)
    # store the path to the champ picture
    picture = models.CharField(max_length=150)
    counter = models.ManyToManyField('self', related_name='counteree')

    def __str__(self):
        return self.name

class Runes(models.Model):
    champion = models.ManyToManyField(Champion, related_name='runes')
    rune_class = models.CharField(max_length=20)
    rune_opt_one = models.CharField(max_length=100)
    rune_opt_two = models.CharField(max_length=100)
    rune_opt_three = models.CharField(max_length=100)
    rune_opt_four = models.CharField(max_length=100)



class Ability(models.Model):
    champion = models.ForeignKey(Champion, on_delete=models.CASCADE)
    passive = models.CharField(max_length=250)
    Q = models.CharField(max_length=250)
    E = models.CharField(max_length=250)
    W = models.CharField(max_length=250)
    R = models.CharField(max_length=250)