import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Repository } from '../repository/repository.model';
import { RepositoryService } from '../repository/repository.service';

@Injectable()
export class BasicRepositoryInfoResolver implements Resolve<Repository> {
    constructor(
        private respositoryService: RepositoryService,
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot): Promise<any> {
        return this.respositoryService.getBasicInfo(route.params['uuid'])
            .then((repository: Repository) => {
                return repository;
            })
            .catch(() => {
                this.router.navigate(['/404']);
                return null;
            });
    }
}
