// SPDX-License-Identifier: GPL-3.0-or-later

#ifndef NETDATA_SQLITE_METADATA_H
#define NETDATA_SQLITE_METADATA_H

#include "sqlite3.h"
#include "sqlite_functions.h"

// To initialize and shutdown
void metadata_sync_init(void);
void metadata_sync_shutdown(void);
void metadata_sync_shutdown_prepare(void);

void metaqueue_delete_dimension_uuid(uuid_t *uuid);
void metaqueue_store_claim_id(uuid_t *host_uuid, uuid_t *claim_uuid);
void metaqueue_host_update_info(RRDHOST *host);
void metaqueue_ml_load_models(RRDDIM *rd);
void detect_machine_guid_change(uuid_t *host_uuid);
void metadata_queue_load_host_context(RRDHOST *host);
void metadata_delete_host_chart_labels(char *machine_guid);
void vacuum_database(sqlite3 *database, const char *db_alias, int threshold, int vacuum_pc);

// UNIT TEST
int metadata_unittest(void);
#endif //NETDATA_SQLITE_METADATA_H
