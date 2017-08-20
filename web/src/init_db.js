module.exports = function(db) {
  stain1 = {
              name: 'CD45',
              in_house: true,
              categories: ['heme'],
              active: true,
              created_at: Date.now(),
              aliases: []
            };
  stain2 = {
              name: 'CD3',
              in_house: true,
              categories: ['heme'],
              active: true,
              created_at: Date.now(),
              aliases: []
            };
  stain3 = {
              name: 'CD5',
              in_house: true,
              categories: ['heme'],
              active: true,
              created_at: Date.now(),
              aliases: []
            };
  stain4 = {
              name: 'CD30',
              in_house: true,
              categories: ['heme'],
              active: true,
              created_at: Date.now(),
              aliases: []
            };
  db.run('DROP TABLE IF EXISTS ihc_table', function(err, res) {
    db.saveDoc("ihc_table", stain1, function(err,doc) {
        if (err) console.error("Error encoutered:", err);
        console.log('IHC added:', doc);
        db.ihc_table.saveDoc(stain2, function(err,doc) {
            if (err) console.error("Error encoutered:", err);
            console.log('IHC added:', doc);
          });
        db.ihc_table.saveDoc(stain3, function(err,doc) {
            if (err) console.error("Error encoutered:", err);
            console.log('IHC added:', doc);
          });
        db.ihc_table.saveDoc(stain4, function(err,doc) {
            if (err) console.error("Error encoutered:", err);
            console.log('IHC added:', doc);
          });
      });
  });
};
