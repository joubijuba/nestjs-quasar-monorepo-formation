# Prisma API références

@see https://www.prisma.io/docs/reference/api-reference/command-reference

# Docker Postgresql

Création du container docker "Postgresql"

    cd developpements
    docker-compose up --build

## Connect to instances


## Preparing database for slow queries tracking

    CREATE EXTENSION pg_stat_statements;
    ALTER DATABASE bountysource SET auto_explain.log_analyze TO on;
    ALTER DATABASE bountysource SET auto_explain.log_min_duration TO 3000;

# Prima

**Prérequis: installer le d'add-on IntelliJ : "Prisma"**

    yarn add prisma --dev
    yarn add @prisma/client


# Mettre à jour base et client durant le developement

    yarn run prisma:push-dev

ou

    yarn run prisma:push-dev --accept-data-loss

Ensuite, run les fichiers présents dans le répertoire **dev-scripts**

# Gestion des migrations modifiées post-migration (en DEV)

Si on modifie une mignration (fichier SQL) après l'avoir passé (migrate) et que l'on ne souhaite pas "reset" la base (perte des données) alors il faut :

* modifier le fichier SQL de la mignration concernée
* modifier la structure de la base en cohérence
* effacer la ligne de la mignration dans la table **_prisma_migrations**
* marquer la migration comme étant déjà passé (migré) :

  npx prisma migrate resolve --applied <nom de la migration>
